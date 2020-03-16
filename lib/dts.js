const dom = require('dts-dom');
const path = require('path');
const fs = require('fs');

const rpc = require('../rpc/rpc.json');

function getType(v) {
  let arr;
  if (v.type === 'array') {
    arr = dom.create.array(dom.type.any);
    if (v.items) {
      arr.type = getType(v.items);
      return arr;
    }
  }
  if (v.$ref || (v.schema && v.schema.$ref)) {
    const r = (v.$ref || v.schema.$ref).replace('#/components/schemas/', '');
    const t = dom.create.namedTypeReference(r);
    if (arr) {
      arr.type = t;
      return arr;
    }
    return t;
  }
  if (arr) {
    return arr;
  }
  if (v.type === 'integer') {
    return dom.type.number;
  }
  if (dom.type[v.type]) {
    return dom.type[v.type];
  }
  console.log('ANNYY');
  return dom.type.any;
}

const definitions = { members: [] };
const rootFlags = dom.DeclarationFlags.Export;

function getReturnType(result) {
  const { properties } = result.schema;
  const ret = dom.create.namedTypeReference('Promise');
  // three types of returns depending on the content of schema:
  // 1. type: 'object', without 'properties' is assumed to return undefined
  // 2. if 'properties' only has one key, then the value will resolve to that property value
  // 3. multiple properties: return object containing those properties

  // No return value
  if (!properties) {
    // TODO - should methods without return value return void instead?
    ret.typeArguments.push(dom.type.undefined);
    return ret;
  }
  const props = Object.keys(properties);
  if (props.length === 1) {
    const retType = getType(properties[props[0]]);
    ret.typeArguments.push(retType);
    return ret;
  }
  const members = props.map(p => {
    return dom.create.property(p, getType(properties[p]));
  });
  const obj = dom.create.objectType(members);
  ret.typeArguments.push(obj);
  return ret;
}

const groups = {};
rpc.methods.forEach(method => {
  const [ns, name] = method.name.split('.');
  if (!groups[ns]) {
    groups[ns] = dom.create.class(ns, rootFlags);
    definitions.members.push(groups[ns]);
  }

  const group = groups[ns];

  const comments = [];
  if (method.description) {
    comments.push(method.description.split('\n')[0]);
  }
  if (method['x-qlik-deprecated']) {
    comments.push('@deprecated');
  }
  const lastRequired =
    method.params.length -
    1 -
    method.params
      .map(p => p.required)
      .reverse()
      .indexOf(true);
  const params = method.params.map((param, i) => {
    const p = dom.create.parameter(param.name, getType(param.schema), param.required ? 0 : dom.ParameterFlags.Optional);
    if (param.description) {
      comments.push(`@param ${param.name} - ${param.description.replace(/\n/g, ' ')}`);
    }
    // some methods on the Doc appear to have required params after optional, which is not
    // allowed in typescript (and is either a mistake in the QIX or just bad API design)
    if (
      [
        'GetDatabaseTableFields',
        'GetDatabaseTablePreview',
        'GetFileTables',
        'GetFileTableFields',
        'GetFileTablePreview',
        'GetFileTablesEx',
      ].includes(name)
    ) {
      if (!param.required && i < lastRequired) {
        console.warn(`Modified optional param ${param.name} in ${method.name}`);
        p.flags = 0;
      }
    }
    return p;
  });

  const fn = dom.create.method(`${name[0].toLowerCase()}${name.slice(1)}`, params, getReturnType(method.result));

  fn.jsDocComment = comments.join('\n');
  group.members.push(fn);
});

Object.keys(rpc.components.schemas).forEach(s => {
  const v = rpc.components.schemas[s];
  if (v.type === 'object') {
    const d = dom.create.interface(s, rootFlags);
    definitions.members.push(d);

    Object.keys(v.properties || {}).forEach(prop => {
      const vp = v.properties[prop];
      const type = getType(vp);
      const dd = dom.create.property(prop, type, typeof vp.default !== 'undefined' ? dom.DeclarationFlags.Optional : 0);
      d.members.push(dd);
    });

    if (v.additionalProperties) {
      v.additionalProperties.anyOf.forEach(prop => {
        const type = getType(prop);
        const dd = dom.create.property(prop.name, type, dom.DeclarationFlags.Optional);
        d.members.push(dd);
      });
    }
  } else if (v.type === 'array') {
    const t = getType(v);
    const d = dom.create.alias(s, t, rootFlags);
    definitions.members.push(d);
  } else if (v.oneOf) {
    const d = dom.create.enum(s, true, rootFlags);
    v.oneOf.forEach(m => {
      const t = dom.create.enumValue(m.description || m.title, m.title);
      d.members.push(t);
    });
    definitions.members.push(d);
  } else {
    console.log('MISSING', s, v.type);
  }
});

const comments = `
// Type definitions for Qlik Engine API v${rpc.info.version}
// Project: https://github.com/miralemd/qae-types.git
`;
const nodes = [comments, ...definitions.members];
const dts = nodes.map(n => dom.emit(n)).join('');

fs.writeFileSync(path.resolve(__dirname, '../generated/qae.d.ts'), dts);
