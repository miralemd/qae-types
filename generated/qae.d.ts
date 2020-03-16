// Type definitions for Qlik Engine API v12.612.0
// Project: https://github.com/miralemd/qae-types.git

export class Field {
  /**
   * Retrieves the number of distinct values in a field.
   */
  getCardinal(): Promise<number>;

  /**
   * Returns the AND mode status of a field.
   */
  getAndMode(): Promise<boolean>;

  /**
   * Selects some values in a field, by entering the values to select.
   * @param qFieldValues - List of the values to select.
   * @param qToggleMode - The default value is false.
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected. The default value is false.
   */
  selectValues(qFieldValues: FieldValue, qToggleMode?: boolean, qSoftLock?: boolean): Promise<boolean>;

  /**
   * Selects field values matching a search string.
   * @param qMatch - String to search for. Can contain wild cards or numeric search criteria.
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected. The default value is false.
   * @param qExcludedValuesMode - Include excluded values in search.
   */
  select(qMatch: string, qSoftLock?: boolean, qExcludedValuesMode?: number): Promise<boolean>;

  /**
   * Toggle selects field values matching a search string.
   * @param qMatch - String to search for. Can contain wild cards or numeric search criteria.
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected. The default value is false.
   * @param qExcludedValuesMode - Include excluded values in search.
   */
  toggleSelect(qMatch: string, qSoftLock?: boolean, qExcludedValuesMode?: number): Promise<boolean>;

  /**
   * Maintains the selections in the current field while clearing the selections in the other fields.
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected. The default value is false.
   */
  clearAllButThis(qSoftLock?: boolean): Promise<boolean>;

  /**
   * Selects all possible values in a specific field.
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected. The default value is false.
   */
  selectPossible(qSoftLock?: boolean): Promise<boolean>;

  /**
   * Inverts the current selections.
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected. The default value is false.
   */
  selectExcluded(qSoftLock?: boolean): Promise<boolean>;

  /**
   * Selects all values of a field. Excluded values are also selected.
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected. The default value is false.
   */
  selectAll(qSoftLock?: boolean): Promise<boolean>;

  /**
   * Locks all selected values of a specific field.
   */
  lock(): Promise<boolean>;

  /**
   * Unlocks all selected values of a specific field if the target (or handle ) is a field.
   */
  unlock(): Promise<boolean>;

  /**
   * Gets the properties of a field.
   */
  getNxProperties(): Promise<NxFieldProperties>;

  /**
   * Sets some properties to a field.
   * @param qProperties - Information about the properties of the field.
   */
  setNxProperties(qProperties: NxFieldProperties): Promise<undefined>;

  /**
   * Sets a field in the AND mode.
   * @param qAndMode - Specifies if the AND mode applies to the field. Set this parameter to true to enter the AND mode.
   */
  setAndMode(qAndMode: boolean): Promise<undefined>;

  /**
   * Selects all alternatives values in a specific field.
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected. The default value is false.
   */
  selectAlternative(qSoftLock?: boolean): Promise<boolean>;

  /**
   * Selects some values in a field, by entering the element numbers related to the values to select.
   * @param qValues - Indexes (or element numbers) of the values to select.
   * @param qToggleMode - Set to true to keep any selections present in the list object. If this parameter is set to false, selections made before accepting the list object search become alternative.
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected. The default value is false.
   */
  lowLevelSelect(qValues: any[], qToggleMode: boolean, qSoftLock?: boolean): Promise<boolean>;

  /**
   * Clears the selections in a specific field.
   */
  clear(): Promise<boolean>;
}

export class Variable {
  /**
   * Returns the calculated value of a variable.
   * @deprecated
   */
  getContent(): Promise<AlfaNumString>;

  /**
   * Returns the raw value of a variable.
   * @deprecated
   */
  getRawContent(): Promise<string>;

  /**
   * Sets a value to a variable.
   * @deprecated
   * @param qContent - Value of the variable.
   * @param qUpdateMRU - If set to true, the value is added to the Most Recently Used (MRU) list.
   */
  setContent(qContent: string, qUpdateMRU: boolean): Promise<boolean>;

  /**
   * Sets the value of a dual variable overriding any input constraints.
   * @deprecated
   * @param qs - String representation of a dual value. Set this parameter to "", if the string representation is to be Null.
   * @param qd - Numeric representation of a dual value.
   */
  forceContent(qs: string, qd: number): Promise<undefined>;

  /**
   * Gets the properties of a variable.
   * @deprecated
   */
  getNxProperties(): Promise<NxVariableProperties>;

  /**
   * Sets some properties to a variable.
   * @deprecated
   * @param qProperties - Information about the properties of the variable
   */
  setNxProperties(qProperties: NxVariableProperties): Promise<undefined>;
}

export class GenericObject {
  /**
   * Evaluates an object and displays its properties including the dynamic properties.
   */
  getLayout(): Promise<GenericObjectLayout>;

  /**
   * Retrieves the values of a list object.
   * @param qPath - Path to the definition of the object to be selected. For example, _/qListObjectDef_ .
   * @param qPages - Array of pages you are interested in.
   */
  getListObjectData(qPath: string, qPages: NxPage): Promise<NxDataPage[]>;

  /**
   * Retrieves the calculated data for a chart, a table, or a scatter plot. It is possible to retrieve specific pages of data.
   * @param qPath - Path to the definition of the object to be selected. For example, _/qHyperCubeDef_ .
   * @param qPages - Array of pages to retrieve.
   */
  getHyperCubeData(qPath: string, qPages: NxPage): Promise<NxDataPage[]>;

  /**
   * Reduces the data of a bar chart, a line chart or a scatter plot chart and retrieves them.
   * @param qPath - Path to the definition of the object to be selected. For example, _/qHyperCubeDef_ .
   * @param qPages - Array of pages.
   * @param qZoomFactor - Defines the zoom factor. If set to -1, the engine decides of the zoom factor. * If the reduction mode is _D1_ or _S_ , the zoom factor is 2ⁿ. If the zoom factor is 5, the data are reduced by a factor 32. * If the reduction mode is _C_ , the zoom factor defines the number of centroids.
   * @param qReductionMode - Defines the reduction mode.  One of: * N or DATA_REDUCTION_NONE * D1 or DATA_REDUCTION_ONEDIM * S or DATA_REDUCTION_SCATTERED * C or DATA_REDUCTION_CLUSTERED * ST or DATA_REDUCTION_STACKED
   */
  getHyperCubeReducedData(
    qPath: string,
    qPages: NxPage,
    qZoomFactor: number,
    qReductionMode: string
  ): Promise<NxDataPage[]>;

  /**
   * Retrieves the values of a pivot table. It is possible to retrieve specific pages of data.
   * @param qPath - Path to the definition of the object to be selected. For example, _/qHyperCubeDef_ .
   * @param qPages - Array of pages to retrieve.
   */
  getHyperCubePivotData(qPath: string, qPages: NxPage): Promise<NxPivotPage[]>;

  /**
   * Retrieves the values of a stacked pivot table. It is possible to retrieve specific pages of data.
   * @param qPath - Path to the definition of the object to be selected. For example, _/qHyperCubeDef_ .
   * @param qPages - Array of pages to retrieve.
   * @param qMaxNbrCells - Maximum number of cells at outer level. The default value is 10 000.
   */
  getHyperCubeStackData(qPath: string, qPages: NxPage, qMaxNbrCells?: number): Promise<NxStackPage[]>;

  /**
   * Retrieves and packs compressed hypercube and axis data. It is possible to retrieve specific pages of data.
   * @param qPath - Path to the definition of the object. For example, _/qHyperCubeDef_ .
   * @param qOptions - Defines the data to return.
   * @param qReverseSort - If set to true the returned data pages are reverse sorted. Optional.
   */
  getHyperCubeContinuousData(
    qPath: string,
    qOptions: NxContinuousDataOptions,
    qReverseSort?: boolean
  ): Promise<{
    qDataPages: NxDataPage[];
    qAxisData: NxAxisData;
  }>;

  /**
   * Retrieves data for nodes in a tree structure. It is possible to retrieve specific pages of data.
   * @param qPath - Path to the definition of the object to be selected.
   * @param qNodeOptions - Specifies all the paging filters needed to define the tree to be fetched. If left out the complete tree is returned.
   */
  getHyperCubeTreeData(qPath: string, qNodeOptions?: NxTreeDataOption): Promise<NxTreeNode[]>;

  /**
   * This method supports data binning.
   * @param qPath - Path to the definition of the object. For example, _/qHyperCubeDef_ .
   * @param qPages - Array of pages to retrieve. Since the generic object contains two measures and one dimension, _qWidth_ should be set to 3. If the value of a measure is Null, the value cannot be rendered. Therefore, the number of elements rendered in a page can be less than the number defined in the property _qHeight_ .
   * @param qViewport - Defines the canvas and the zoom level. This parameter is not yet used and is optional.
   * @param qDataRanges - Range of the data to render. This range applies to the measure values. The lowest and highest values of a measure can be retrieved by using the _GetLayout method_ (in _/qHyperCube/qMeasureInfo_ ).
   * @param qMaxNbrCells - Maximum number of cells in the grid.
   * @param qQueryLevel - Level of details. The higher the level, the more detailed information you get (zoom-in). When the number of points to render falls below a certain threshold, the values are no longer rendered as cells but as points. The query level should be no greater than 20.
   * @param qBinningMethod - Selects the algorithm. The default value is 0. One of: * 0: Adaptive grid * 1: Hexagonal grid * 2: Uniform grid
   */
  getHyperCubeBinnedData(
    qPath: string,
    qPages: NxPage,
    qViewport: NxViewPort,
    qDataRanges: NxDataAreaPage,
    qMaxNbrCells: number,
    qQueryLevel: number,
    qBinningMethod: number
  ): Promise<NxDataPage[]>;

  /**
   * Applies a patch to the properties of an object. Allows an update to some of the properties.
   * @param qPatches - Array of patches.
   * @param qSoftPatch - If set to true, it means that the properties to be applied are not persistent. The patch is a soft patch. The default value is false.
   */
  applyPatches(qPatches: NxPatch, qSoftPatch?: boolean): Promise<undefined>;

  /**
   * Clears the soft properties of a generic object.
   */
  clearSoftPatches(): Promise<undefined>;

  /**
   * Sets some properties for a generic object.
   * @param qProp - Information about the generic object.
   */
  setProperties(qProp: GenericObjectProperties): Promise<undefined>;

  /**
   * Returns the identifier, the type and the properties of the object.
   */
  getProperties(): Promise<GenericObjectProperties>;

  /**
   * Returns the identifier, the type and the properties of the object.
   */
  getEffectiveProperties(): Promise<GenericObjectProperties>;

  /**
   * Sets the properties of:
   * @param qPropEntry - Information about the generic object entry.
   */
  setFullPropertyTree(qPropEntry: GenericObjectEntry): Promise<undefined>;

  /**
   * Gets the properties of:
   */
  getFullPropertyTree(): Promise<GenericObjectEntry>;

  /**
   * Returns the type and identifier of the object.
   */
  getInfo(): Promise<NxInfo>;

  /**
   * Clears the selections in a dimension of a visualization.
   * @param qPath - Path to the definition of the visualization. For example, _/qListObjectDef_ .
   * @param qColIndices - Array of dimension numbers or indexes. The selections are cleared in the specified dimensions. Dimension numbers/indexes start from 0. If this parameter is not set, all dimensions are cleared.
   */
  clearSelections(qPath: string, qColIndices?: any[]): Promise<undefined>;

  /**
   * Exports the data of any generic object to an Excel file or a open XML file. If the object contains excluded values, those excluded values are not exported.
   * @param qFileType - Type of the file to export.  One of: * CSV_C or EXPORT_CSV_C * CSV_T or EXPORT_CSV_T * OOXML or EXPORT_OOXML
   * @param qPath - Path to the definition of the object to be exported. For example, _/qHyperCubeDef_ . This parameter is mandatory if the file type is _CSV_C_ or _CSV_T_ .
   * @param qFileName - Name of the exported file after download from browser. This parameter is optional and only used in Qlik Sense Desktop.
   * @param qExportState - Defines the values to be exported. The default value is A.  One of: * P or EXPORT_POSSIBLE * A or EXPORT_ALL
   */
  exportData(
    qFileType: string,
    qPath?: string,
    qFileName?: string,
    qExportState?: string
  ): Promise<{
    qUrl: string;
    qWarnings: any[];
  }>;

  /**
   * Makes single selections in dimensions.
   * @param qPath - Path to the definition of the object to be selected. For example, _/qListObjectDef_ .
   * @param qValues - Element numbers to select. You can select multiple values; the separator is the comma.
   * @param qToggleMode - Set to true to toggle.
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected. The default value is false.
   */
  selectListObjectValues(qPath: string, qValues: any[], qToggleMode: boolean, qSoftLock?: boolean): Promise<boolean>;

  /**
   * Selects all possible values of a list object.
   * @param qPath - Path to the definition of the object to be selected. For example, _/qListObjectDef_ .
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected. The default value is false.
   */
  selectListObjectPossible(qPath: string, qSoftLock?: boolean): Promise<boolean>;

  /**
   * Inverts the current selections in a specific field.
   * @param qPath - Path to the definition of the object to be selected. For example, _/qListObjectDef_ .
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected. The default value is false.
   */
  selectListObjectExcluded(qPath: string, qSoftLock?: boolean): Promise<boolean>;

  /**
   * Selects all alternative values in a specific field.
   * @param qPath - Path to the definition of the object to be selected. For example, _/qListObjectDef_ .
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected. The default value is false.
   */
  selectListObjectAlternative(qPath: string, qSoftLock?: boolean): Promise<boolean>;

  /**
   * Selects all values of a field.
   * @param qPath - Path to the definition of the object to be selected. For example, _/qListObjectDef_ .
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected. The default value is false.
   */
  selectListObjectAll(qPath: string, qSoftLock?: boolean): Promise<boolean>;

  /**
   * The following is returned in the output:
   * @param qPath - Path to the definition of the object. For example, _/qHyperCubeDef_ .
   * @param qRanges - Selects ranges in a hypercube in (Ranges[N].Min,Ranges[N].Max) intervals. If either Ranges[N].MinInclEq or Ranges[N].MaxInclEq, or both flags are set to _true_ then _Min_ and _Max_ values will be selected.
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected. The default value is false.
   */
  selectListObjectContinuousRange(qPath: string, qRanges: Range, qSoftLock?: boolean): Promise<boolean>;

  /**
   * Searches for a string in a list object.
   * @param qPath - Path to the definition of the list object. For example, _/qListObjectDef_ .
   * @param qMatch - Search string. Wild card characters are allowed. The search is not case sensitive. Examples: * P*U*: retrieves only values that start with P and contain U * P U S: retrieves values that start with P, U or S
   */
  searchListObjectFor(qPath: string, qMatch: string): Promise<boolean>;

  /**
   * Aborts the results of a search in a list object.
   * @param qPath - Path to the definition of the list object. For example, _/qListObjectDef_ .
   */
  abortListObjectSearch(qPath: string): Promise<undefined>;

  /**
   * Accept the results of a search in a list object. The search results become selected in the field.
   * @param qPath - Path to the definition of the list object. For example, _/qListObjectDef_ .
   * @param qToggleMode - Set to true to keep any selections present in the list object. If this parameter is set to false, selections made before accepting the list object search become alternative.
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected. The default value is false.
   */
  acceptListObjectSearch(qPath: string, qToggleMode: boolean, qSoftLock?: boolean): Promise<undefined>;

  /**
   * Expands the left dimensions of a pivot table. This method applies only to pivot tables that are not always fully expanded.
   * @param qPath - Path to the definition of the object to be expanded. For example, _/qHyperCubeDef_ .
   * @param qRow - Row index in the data matrix to expand. Indexing starts from 0.
   * @param qCol - Column index. The index is based on the left dimension indexes. Indexing starts from 0.
   * @param qAll - If set to true, it expands all cells. Parameters _qRow_ and _qCol_ are not used if _qAll_ is set to true, but they need to be set (for example to 0).
   */
  expandLeft(qPath: string, qRow: number, qCol: number, qAll: boolean): Promise<undefined>;

  /**
   * Expands the top dimensions of a pivot table. This method applies only to pivot tables that are not always fully expanded.
   * @param qPath - Path to the definition of the object to be expanded. For example, _/qHyperCubeDef_ .
   * @param qRow - Row index. The index is based on the top dimension indexes. Indexing starts from 0.
   * @param qCol - Column index in the data matrix. Indexing starts from 0.
   * @param qAll - If set to true, it expands all cells. Parameters _qRow_ and _qCol_ are not used if _qAll_ is set to true, but they need to be set (for example to 0).
   */
  expandTop(qPath: string, qRow: number, qCol: number, qAll: boolean): Promise<undefined>;

  /**
   * Collapses the left dimensions of a pivot table. This method applies only to pivot tables that are not always fully expanded.
   * @param qPath - Path to the definition of the object to be collapsed. For example, _/qHyperCubeDef_ .
   * @param qRow - Row index in the data matrix. Indexing starts from 0.
   * @param qCol - Column index. The index is based on the left dimension indexes. Indexing starts from 0.
   * @param qAll - If set to true, it collapses all cells. Parameters _qRow_ and _qCol_ are not used if _qAll_ is set to true, but they need to be set (for example to 0).
   */
  collapseLeft(qPath: string, qRow: number, qCol: number, qAll: boolean): Promise<undefined>;

  /**
   * Collapses the top dimensions of a pivot table. This method applies only to pivot tables that are not always fully expanded.
   * @param qPath - Path to the definition of the object to be collapsed For example, _/qHyperCubeDef_ .
   * @param qRow - Row index. The index is based on the top dimension indexes. Indexing starts from 0.
   * @param qCol - Column index in the data matrix. Indexing starts from 0.
   * @param qAll - If set to true, it collapses all cells. Parameters _qRow_ and _qCol_ are not used if _qAll_ is set to true, but they need to be set (for example to 0).
   */
  collapseTop(qPath: string, qRow: number, qCol: number, qAll: boolean): Promise<undefined>;

  /**
   * You can use the drillUp method with any object that contains a drill-down group as a dimension.
   * @param qPath - Path to the definition of the object to be selected. For example, _/qHyperCubeDef_ .
   * @param qDimNo - Dimension number or index starting from 0. The default value is 0.
   * @param qNbrSteps - Number of steps you want to drill up. The default value is 0.
   */
  drillUp(qPath: string, qDimNo: number, qNbrSteps: number): Promise<undefined>;

  /**
   * Locks the selected values of a generic object.
   * @param qPath - Path to the definition of the object. For example, _/qListObjectDef_ .
   * @param qColIndices - Dimension numbers or dimension indexes where the lock should apply. Dimension numbers/indexes start from 0. If this parameter is not set, the selected values in all dimensions are locked.
   */
  lock(qPath: string, qColIndices?: any[]): Promise<undefined>;

  /**
   * Unlocks the selected values of a generic object if the target (or handle ) is a generic object
   * @param qPath - Path to the definition of the object. For example, _/qListObjectDef_ .
   * @param qColIndices - Dimension numbers/indexes where the unlock should apply. Dimension numbers/indexes start from 0. If this parameter is not set, the locked values in all dimensions are unlocked.
   */
  unlock(qPath: string, qColIndices?: any[]): Promise<undefined>;

  /**
   * Selects some values in one dimension.
   * @param qPath - Path to the definition of the object to be selected. For example, _/qHyperCubeDef_ .
   * @param qDimNo - Dimension number or index to select. Dimension numbers/index start from 0.
   * @param qValues - Element numbers of the field to select. You can select multiple elements; the separator is the comma.
   * @param qToggleMode - Set to true to toggle.
   */
  selectHyperCubeValues(qPath: string, qDimNo: number, qValues: any[], qToggleMode: boolean): Promise<boolean>;

  /**
   * Makes selections in multiple dimensions and measures.
   * @param qPath - Path to the definition of the object to be selected. For example, _/qHyperCubeDef_ .
   * @param qRowIndices - Array of row indexes to select, starting from 0. If the array is empty _[ ]_ , all rows are selected.
   * @param qColIndices - Indexes of the columns to select, starting from 0. A column corresponds to a dimension in the order they are added to the hypercube. If a column is hidden it is ignored, qColIndex n refers to the n:th visible column (starting from zero). Example: If the hypercube has two dimensions: * [0] selects the first column (i.e the first dimension). * [1] selects the second column (i.e the second dimension).  If the array is empty _[ ]_ , all columns are selected.
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
   * @param qDeselectOnlyOneSelected - Set this parameter to true to unselect the last single selected value. There must be only one selected value in the field. The default value is false.
   */
  selectHyperCubeCells(
    qPath: string,
    qRowIndices: any[],
    qColIndices: any[],
    qSoftLock?: boolean,
    qDeselectOnlyOneSelected?: boolean
  ): Promise<boolean>;

  /**
   * <div class=note>This method only applies to hypercubes that are not represented as straight tables. The parameter _qMode_ in _HyperCubeDef_ must be set either to _P_  or _K_ . </div>
   * @param qPath - Path to the definition of the object. For example, _/qHyperCubeDef_ .
   * @param qSelections - Information about the selections to perform.
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
   * @param qDeselectOnlyOneSelected - Set this parameter to true to unselect the last single selected value. There must be only one selected value in the field. The default value is false.
   */
  selectPivotCells(
    qPath: string,
    qSelections: NxSelectionCell,
    qSoftLock?: boolean,
    qDeselectOnlyOneSelected?: boolean
  ): Promise<boolean>;

  /**
   * Makes range selections in measures.
   * @param qPath - Path to the definition of the object to be selected. For example, _/qHyperCubeDef_ .
   * @param qRanges - Ranges of selections.
   * @param qColumnsToSelect - Indicates which dimensions to select. The dimensions numbering starts at 0 (first dimension is 0). If the array is empty, all dimensions are selected.
   * @param qOrMode - Applies to hypercubes with multiple measures. If set to true, it means that at least one of the measures must be in the range of selections for the group of measures to be selected. If set to false, it means that all measures must be in the range of selections for the group of measures to be selected. The default value is false.
   * @param qDeselectOnlyOneSelected - Set this parameter to true to unselect the last single selected value. There must be only one selected value in the field. The default value is false.
   */
  rangeSelectHyperCubeValues(
    qPath: string,
    qRanges: NxRangeSelectInfo,
    qColumnsToSelect?: any[],
    qOrMode?: boolean,
    qDeselectOnlyOneSelected?: boolean
  ): Promise<boolean>;

  /**
   * Makes multiple range selections in measures.
   * @param qPath - Path to the definition of the object to be selected. For example, _/qHyperCubeDef_ .
   * @param qRanges - Ranges of selections.
   * @param qOrMode - Applies to hypercubes with multiple measures. If set to true, it means that at least one of the measures must be in the range of selections for the group of measures to be selected. If set to false, it means that all measures must be in the range of selections for the group of measures to be selected. The default value is false.
   * @param qDeselectOnlyOneSelected - Set this parameter to true to unselect the last single selected value. There must be only one selected value in the field. The default value is false.
   */
  multiRangeSelectHyperCubeValues(
    qPath: string,
    qRanges: NxMultiRangeSelectInfo,
    qOrMode?: boolean,
    qDeselectOnlyOneSelected?: boolean
  ): Promise<boolean>;

  multiRangeSelectTreeDataValues(
    qPath: string,
    qRanges: NxTreeMultiRangeSelectInfo,
    qOrMode?: boolean,
    qDeselectOnlyOneSelected?: boolean
  ): Promise<boolean>;

  /**
   * The following is returned in the output:
   * @param qPath - Path to the definition of the object. For example, _/qHyperCubeDef_ .
   * @param qRanges - Selects ranges in a hypercube in (Ranges[N].Min,Ranges[N].Max) intervals. If either Ranges[N].MinInclEq or Ranges[N].MaxInclEq, or both flags are set to _true_ then _Min_ and _Max_ values will be selected.
   * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected. The default value is false.
   */
  selectHyperCubeContinuousRange(
    qPath: string,
    qRanges: NxContinuousRangeSelectInfo,
    qSoftLock?: boolean
  ): Promise<boolean>;

  /**
   * Returns the type of the object and the corresponding handle.
   * @param qId - Identifier of the object.
   */
  getChild(qId: string): Promise<ObjectInterface>;

  /**
   * Returns the type of the object and the corresponding handle to the parent object in the hiearchy.
   */
  getParent(): Promise<ObjectInterface>;

  /**
   * Returns the identifier and the type for each child in an app object. If the child contains extra properties in _qInfos_ , these properties are returned.
   */
  getChildInfos(): Promise<NxInfo[]>;

  /**
   * Creates a generic object that is a child of another generic object.
   * @param qProp - Information about the child. It is possible to create a child that is linked to another object.
   * @param qPropForThis - Identifier of the parent's object. Should be set to update the properties of the parent's object at the same time the child is created.
   */
  createChild(
    qProp: GenericObjectProperties,
    qPropForThis?: GenericObjectProperties
  ): Promise<{
    qInfo: NxInfo;
    qReturn: ObjectInterface;
  }>;

  /**
   * Removes a child object.
   * @param qId - Identifier of the child to remove.
   * @param qPropForThis - Identifier of the parent's object and property to update. Should be set to update the properties of the parent's object at the same time the child is created.
   */
  destroyChild(qId: string, qPropForThis?: GenericObjectProperties): Promise<boolean>;

  /**
   * Removes all children and all children to the children on an object.
   * @param qPropForThis - Identifier of the parent's object and property to update. Should be set to update the properties of the parent's object at the same time the child is created.
   */
  destroyAllChildren(qPropForThis?: GenericObjectProperties): Promise<undefined>;

  /**
   * Sets the order of the children in a generic object.
   * @param qIds - List of the children identifiers.
   */
  setChildArrayOrder(qIds: any[]): Promise<undefined>;

  /**
   * Lists the linked objects to a generic object, a dimension or a measure.
   */
  getLinkedObjects(): Promise<NxLinkedObjectInfo[]>;

  /**
   * Copies the properties of a generic object and its children.
   * @param qFromId - Identifier of the object to copy.
   */
  copyFrom(qFromId: string): Promise<undefined>;

  /**
   * Begins the selection mode. The app enters the modal state. The specified object enters the selection mode and a modal window is opened. The selection mode can apply to only one object in an app at a time.
   * @param qPaths - List of the paths to the definition of the objects to enter selection mode. For example, _/qListObjectDef_ .
   */
  beginSelections(qPaths: any[]): Promise<undefined>;

  /**
   * Ends the selection mode on a visualization. The selections are accepted or aborted when exiting the selection mode, depending on the _qAccept_ parameter value.
   * @param qAccept - Set this parameter to true to accept the selections before exiting the selection mode.
   */
  endSelections(qAccept: boolean): Promise<undefined>;

  /**
   * Resets all selections made in selection mode.
   */
  resetMadeSelections(): Promise<undefined>;

  /**
   * Adds a snapshot to a generic object.
   * @param qId - Identifier of the bookmark.
   */
  embedSnapshotObject(qId: string): Promise<undefined>;

  /**
   * Returns the type of the object and the corresponding handle.
   */
  getSnapshotObject(): Promise<ObjectInterface>;

  /**
   * Publishes a generic object.
   */
  publish(): Promise<undefined>;

  /**
   * Unpublishes a generic object.
   */
  unPublish(): Promise<undefined>;

  /**
   * Adds the generic object to the list of approved objects
   */
  approve(): Promise<undefined>;

  /**
   * Removes the generic object from the list of approved objects
   */
  unApprove(): Promise<undefined>;
}

export class GenericDimension {
  /**
   * Evaluates a dimension and displays its properties, including the dynamic properties.
   */
  getLayout(): Promise<GenericDimensionLayout>;

  /**
   * Applies a patch to the properties of an object. Allows an update to some of the properties.
   * @param qPatches - Array of patches.
   */
  applyPatches(qPatches: NxPatch): Promise<undefined>;

  /**
   * Sets some properties for a dimension.
   * @param qProp - Information about the dimension.
   */
  setProperties(qProp: GenericDimensionProperties): Promise<undefined>;

  /**
   * Shows the properties of an object.
   */
  getProperties(): Promise<GenericDimensionProperties>;

  /**
   * Returns the type and identifier of the object.
   */
  getInfo(): Promise<NxInfo>;

  /**
   * Returns the definition of a dimension.
   */
  getDimension(): Promise<NxLibraryDimensionDef>;

  /**
   * Lists the linked objects to a generic object, a dimension or a measure.
   */
  getLinkedObjects(): Promise<NxLinkedObjectInfo[]>;

  /**
   * Publishes a dimension.
   */
  publish(): Promise<undefined>;

  /**
   * Unpublishes a dimension.
   */
  unPublish(): Promise<undefined>;

  /**
   * Adds the generic dimension to the list of approved objects
   */
  approve(): Promise<undefined>;

  /**
   * Removes the generic dimension from the list of approved objects
   */
  unApprove(): Promise<undefined>;
}

export class GenericBookmark {
  /**
   * Retrieves the values of a field.
   * @param qField - Name of the field.
   * @param qGetExcludedValues - If set to true, only excluded values are returned.
   * @param qDataPage - Range of returned values.
   */
  getFieldValues(qField: string, qGetExcludedValues: boolean, qDataPage: BookmarkFieldPage): Promise<FieldValue[]>;

  /**
   * Evaluates an object and displays its properties including the dynamic properties.
   */
  getLayout(): Promise<GenericBookmarkLayout>;

  /**
   * Applies a patch to the properties of an object. Allows an update to some of the properties.
   * @param qPatches - Array of patches.
   */
  applyPatches(qPatches: NxPatch): Promise<undefined>;

  /**
   * Sets some properties for a bookmark.
   * @param qProp - Information about the bookmark.
   */
  setProperties(qProp: GenericBookmarkProperties): Promise<undefined>;

  /**
   * Shows the properties of an object.
   */
  getProperties(): Promise<GenericBookmarkProperties>;

  /**
   * Returns:
   */
  getInfo(): Promise<NxInfo>;

  /**
   * Applies a bookmark.
   */
  apply(): Promise<boolean>;

  /**
   * Publishes a bookmark.
   */
  publish(): Promise<undefined>;

  /**
   * Unpublishes a bookmark.
   */
  unPublish(): Promise<undefined>;

  /**
   * Adds the generic bookmark to the list of approved objects
   */
  approve(): Promise<undefined>;

  /**
   * Removes the generic bookmark from the list of approved objects
   */
  unApprove(): Promise<undefined>;
}

export class GenericVariable {
  /**
   * Evaluates an object and displays its properties including the dynamic properties.
   */
  getLayout(): Promise<GenericVariableLayout>;

  /**
   * Applies a patch to the properties of a variable. Allows an update to some of the properties.
   * @param qPatches - Array of patches.
   */
  applyPatches(qPatches: NxPatch): Promise<undefined>;

  /**
   * Sets some properties for a variable.
   * @param qProp - Information about the variable.
   */
  setProperties(qProp: GenericVariableProperties): Promise<undefined>;

  /**
   * Shows the properties of an object.
   */
  getProperties(): Promise<GenericVariableProperties>;

  /**
   * Returns the type and identifier of the object.
   */
  getInfo(): Promise<NxInfo>;

  /**
   * Sets a string value to a variable.
   * @param qVal - Value of the variable. The string can contain an expression.
   */
  setStringValue(qVal: string): Promise<undefined>;

  /**
   * Sets a numerical value to a variable.
   * @param qVal - Value of the variable.
   */
  setNumValue(qVal: number): Promise<undefined>;

  /**
   * Sets the value of a dual variable.
   * @param qText - String representation of a dual value. Set this parameter to "", if the string representation is to be Null.
   * @param qNum - Numeric representation of a dual value.
   */
  setDualValue(qText: string, qNum: number): Promise<undefined>;

  /**
   * Returns the raw value of a variable.
   */
  getRawContent(): Promise<string>;
}

export class GenericMeasure {
  /**
   * Evaluates a measure and displays its properties, including the dynamic properties.
   */
  getLayout(): Promise<GenericMeasureLayout>;

  /**
   * Applies a patch to the properties of an object. Allows an update to some of the properties.
   * @param qPatches - Array of patches.
   */
  applyPatches(qPatches: NxPatch): Promise<undefined>;

  /**
   * Sets some properties for a measure.
   * @param qProp - Information about the measure.
   */
  setProperties(qProp: GenericMeasureProperties): Promise<undefined>;

  /**
   * Shows the properties of an object.
   */
  getProperties(): Promise<GenericMeasureProperties>;

  /**
   * Returns the type and identifier of the object.
   */
  getInfo(): Promise<NxInfo>;

  /**
   * Returns the definition of a measure.
   */
  getMeasure(): Promise<NxLibraryMeasureDef>;

  /**
   * Lists the linked objects to a generic object, a dimension or a measure.
   */
  getLinkedObjects(): Promise<NxLinkedObjectInfo[]>;

  /**
   * Publishes a measure.
   */
  publish(): Promise<undefined>;

  /**
   * Unpublishes a measure.
   */
  unPublish(): Promise<undefined>;

  /**
   * Adds the generic measure to the list of approved objects
   */
  approve(): Promise<undefined>;

  /**
   * Removes the generic measure from the list of approved objects
   */
  unApprove(): Promise<undefined>;
}

export class Doc {
  /**
   * Returns a handle to a field.
   * @param qFieldName - Name of the field.
   * @param qStateName - Name of the alternate state. Default state is current selections.
   */
  getField(qFieldName: string, qStateName?: string): Promise<ObjectInterface>;

  /**
   * Returns the description of a field.
   * @param qFieldName - Name of the field.
   */
  getFieldDescription(qFieldName: string): Promise<FieldDescription>;

  /**
   * Returns a handle to a variable.
   * @deprecated
   * @param qName - Name of the variable.
   */
  getVariable(qName: string): Promise<ObjectInterface>;

  /**
   * Returns a list of table states.
   */
  getLooselyCoupledVector(): Promise<any[]>;

  /**
   * Sets a list of table states, one for each table.
   * @param qv - The list of table states to set. A state will not be changed if already set to 2.
   */
  setLooselyCoupledVector(qv: any[]): Promise<boolean>;

  /**
   * Evaluates an expression and returns the result as a string.
   * @param qExpression - Expression to evaluate.
   */
  evaluate(qExpression: string): Promise<string>;

  /**
   * Evaluates an expression and returns the result as a dual.
   * @param qExpression - Expression to evaluate.
   */
  evaluateEx(qExpression: string): Promise<FieldValue>;

  /**
   * Clear selections in fields for current state. Locked fields are not cleared by default.
   * @param qLockedAlso - When true, clears the selection for locked fields.
   * @param qStateName - Alternate state name. When set, applies to alternate state instead of current
   */
  clearAll(qLockedAlso?: boolean, qStateName?: string): Promise<undefined>;

  /**
   * Locks all selections in fields for current state.
   * @param qStateName - Alternate state name. When set, applies to alternate state instead of current.
   */
  lockAll(qStateName?: string): Promise<undefined>;

  /**
   * Unlocks all selections in fields for current state.
   * @param qStateName - Alternate state name. When set, applies to alternate state instead of current.
   */
  unlockAll(qStateName?: string): Promise<undefined>;

  /**
   * Loads the last logical operation (if any).
   */
  back(): Promise<undefined>;

  /**
   * Loads the next logical operation (if any).
   */
  forward(): Promise<undefined>;

  /**
   * Creates a variable.
   * @deprecated
   * @param qName - Name of the variable. Variable names are case sensitive.
   */
  createVariable(qName: string): Promise<boolean>;

  /**
   * Removes a variable.
   * @deprecated
   * @param qName - Name of the variable. Variable names are case sensitive.
   */
  removeVariable(qName: string): Promise<boolean>;

  /**
   * Returns locale information.
   */
  getLocaleInfo(): Promise<LocaleInfo>;

  /**
   * Returns:
   * @param qWindowSize - Size of the window that is used to display the results.
   * @param qCellHeight - Height of a cell in a table in pixels.
   * @param qSyntheticMode - One of: * _true_ for internal table viewer: Shows a more detailed view on how the Qlik engine defines the relations between fields and the quality of the keys. * _false_ for source table viewer: Shows the natural relation between fields without reference to synthetic keys and resultant linking synthetic tables. Instead synthetic keys are represented by multiple connectors between tables.
   * @param qIncludeSysVars - If set to true, the system variables are included.
   */
  getTablesAndKeys(
    qWindowSize: Size,
    qNullSize: Size,
    qCellHeight: number,
    qSyntheticMode: boolean,
    qIncludeSysVars: boolean
  ): Promise<{
    qtr: TableRecord[];
    qk: SourceKeyRecord[];
  }>;

  /**
   * Returns information about the position of the tables in the data model viewer.
   */
  getViewDlgSaveInfo(): Promise<TableViewDlgSaveInfo>;

  /**
   * Sets the positions of the tables in the data model viewer.
   * @param qInfo - Information about the table.
   */
  setViewDlgSaveInfo(qInfo: TableViewDlgSaveInfo): Promise<undefined>;

  /**
   * Creates a script that contains one section. This section contains **SET** statements that give localized information from the regional settings of the computer.
   * @param qLocalizedMainSection - Name of the script section. The default value is _Main_ .
   */
  getEmptyScript(qLocalizedMainSection?: string): Promise<string>;

  /**
   * Reloads the script that is set in an app.
   * @param qMode - Error handling mode One of: * 0: for default mode. * 1: for ABEND; the reload of the script ends if an error occurs. * 2: for ignore; the reload of the script continues even if an error is detected in the script.
   * @param qPartial - Set to true for partial reload. The default value is false.
   * @param qDebug - Set to true if debug breakpoints are to be honored. The execution of the script will be in debug mode. The default value is false.
   */
  doReload(qMode?: number, qPartial?: boolean, qDebug?: boolean): Promise<boolean>;

  /**
   * Lists the breakpoints in the script of an app.
   */
  getScriptBreakpoints(): Promise<EditorBreakpoint[]>;

  /**
   * Set some breakpoints in the script of an app.
   * @param qBreakpoints - Information about the breakpoints.
   */
  setScriptBreakpoints(qBreakpoints: EditorBreakpoint): Promise<undefined>;

  /**
   * Gets values in script.
   */
  getScript(): Promise<string>;

  /**
   * Fetches updated variables after a statement execution.
   */
  getTextMacros(): Promise<TextMacro[]>;

  /**
   * Limits the number of rows of data to load from a data source.
   * @param qLimit - Fetch limit. Number of rows to load.
   */
  setFetchLimit(qLimit: number): Promise<undefined>;

  /**
   * Saves an app. All objects and data in the data model are saved.
   * @param qFileName - Name of the file to save.
   */
  doSave(qFileName?: string): Promise<undefined>;

  /**
   * Retrieves the data of a specific table.
   * @param qOffset - Position from the top, starting from 0. If the offset is set to 0, the rows starting from the position/index 0 are shown.
   * @param qRows - Number of rows to show.
   * @param qSyntheticMode - If this parameter is set to true, the internal data/table representation is shown. Synthetic fields are present (if any).
   * @param qTableName - Name of the table.
   */
  getTableData(qOffset: number, qRows: number, qSyntheticMode: boolean, qTableName: string): Promise<TableRow[]>;

  /**
   * Evaluates an app.
   */
  getAppLayout(): Promise<NxAppLayout>;

  /**
   * Sets properties to an app.
   * @param qProp - Information about the properties of an app.
   */
  setAppProperties(qProp: NxAppProperties): Promise<undefined>;

  /**
   * Gets the properties of an app.
   */
  getAppProperties(): Promise<NxAppProperties>;

  /**
   * Gets the lineage information of the app. The lineage information includes the LOAD and STORE statements from the data load script associated with this app.
   */
  getLineage(): Promise<LineageInfo[]>;

  /**
   * Creates a transient object. For example, you can use a transient object to create an app overview or a story overview.
   * @param qProp - Information about the object.
   */
  createSessionObject(qProp: GenericObjectProperties): Promise<ObjectInterface>;

  /**
   * Removes a transient object.
   * @param qId - Identifier of the transient object to remove.
   */
  destroySessionObject(qId: string): Promise<boolean>;

  /**
   * Creates a generic object at app level. For more information on generic objects, see _Generic object_.
   * @param qProp - Information about the object.
   */
  createObject(
    qProp: GenericObjectProperties
  ): Promise<{
    qInfo: NxInfo;
    qReturn: ObjectInterface;
  }>;

  /**
   * Removes an app object.
   * @param qId - Identifier of the object to remove.
   */
  destroyObject(qId: string): Promise<boolean>;

  /**
   * Returns the type of the app object and the corresponding handle.
   * @param qId - Identifier of the object to retrieve.
   */
  getObject(qId: string): Promise<ObjectInterface>;

  /**
   * Returns all objects compatible with options.
   * @param qOptions - Object type filter and requested properties.
   */
  getObjects(qOptions: NxGetObjectOptions): Promise<NxContainerEntry[]>;

  /**
   * Returns all bookmarks compatible with options.
   * @param qOptions - Bookmark type filter and requested properties.
   */
  getBookmarks(qOptions: NxGetBookmarkOptions): Promise<NxContainerEntry[]>;

  /**
   * Clones root level objects, such as sheets and stories. The CloneObject method works for both app objects and child objects.
   * @param qId - Identifier of the object to clone. The identifier must be a root object.
   */
  cloneObject(qId: string): Promise<string>;

  /**
   * Creates a draft of an object.
   * @deprecated
   * @param qId - Identifier of the object to create a draft from.
   */
  createDraft(qId: string): Promise<string>;

  /**
   * Commits the draft of an object that was previously created by invoking the _CreateDraft method_.
   * @deprecated
   * @param qId - Identifier of the draft to commit.
   */
  commitDraft(qId: string): Promise<undefined>;

  /**
   * Removes the draft of an object.
   * @deprecated
   * @param qId - Identifier of the draft object to remove.
   * @param qSourceId - Identifier of the source object (the object from which a draft was created).
   */
  destroyDraft(qId: string, qSourceId: string): Promise<boolean>;

  /**
   * Undoes the previous operation.
   */
  undo(): Promise<boolean>;

  /**
   * Redoes the previous operation.
   */
  redo(): Promise<boolean>;

  /**
   * Clears entirely the undo and redo buffer.
   */
  clearUndoBuffer(): Promise<undefined>;

  /**
   * Creates a master dimension.
   * @param qProp - Information about the properties.
   */
  createDimension(
    qProp: GenericDimensionProperties
  ): Promise<{
    qInfo: NxInfo;
    qReturn: ObjectInterface;
  }>;

  /**
   * Removes a dimension.
   * @param qId - Identifier of the dimension to remove.
   */
  destroyDimension(qId: string): Promise<boolean>;

  /**
   * Returns the handle of a dimension.
   * @param qId - Identifier of the dimension.
   */
  getDimension(qId: string): Promise<ObjectInterface>;

  /**
   * Clones a dimension.
   * @param qId - Identifier of the object to clone.
   */
  cloneDimension(qId: string): Promise<string>;

  /**
   * Creates a master measure.
   * @param qProp - Information about the properties.
   */
  createMeasure(
    qProp: GenericMeasureProperties
  ): Promise<{
    qInfo: NxInfo;
    qReturn: ObjectInterface;
  }>;

  /**
   * Removes a generic measure.
   * @param qId - Identifier of the measure to remove.
   */
  destroyMeasure(qId: string): Promise<boolean>;

  /**
   * Returns the handle of a measure.
   * @param qId - Identifier of the measure.
   */
  getMeasure(qId: string): Promise<ObjectInterface>;

  /**
   * Clones a measure.
   * @param qId - Identifier of the object to clone.
   */
  cloneMeasure(qId: string): Promise<string>;

  /**
   * Creates a transient variable.
   * @param qProp - Name of the variable. Variable names are case sensitive.
   */
  createSessionVariable(qProp: GenericVariableProperties): Promise<ObjectInterface>;

  /**
   * Removes a transient variable.
   * @param qId - Identifier of the variable.
   */
  destroySessionVariable(qId: string): Promise<boolean>;

  /**
   * Creates a variable.
   * @param qProp - Name of the variable. Variable names are case sensitive and must be unique.
   */
  createVariableEx(
    qProp: GenericVariableProperties
  ): Promise<{
    qInfo: NxInfo;
    qReturn: ObjectInterface;
  }>;

  /**
   * Removes a variable.
   * @param qId - Identifier of the variable.
   */
  destroyVariableById(qId: string): Promise<boolean>;

  /**
   * Removes a variable.
   * @param qName - Name of the variable.
   */
  destroyVariableByName(qName: string): Promise<boolean>;

  /**
   * Gets the handle of a variable.
   * @param qId - Identifier of the variable.
   */
  getVariableById(qId: string): Promise<ObjectInterface>;

  /**
   * Gets the handle of a variable.
   * @param qName - Name of the variable.
   */
  getVariableByName(qName: string): Promise<ObjectInterface>;

  /**
   * Checks if a given expression is valid.
   * @param qExpr - Expression to check.
   * @param qLabels - List of labels.
   */
  checkExpression(
    qExpr: string,
    qLabels?: any[]
  ): Promise<{
    qErrorMsg: string;
    qBadFieldNames: NxRange[];
    qDangerousFieldNames: NxRange[];
  }>;

  /**
   * Checks if:
   * @param qExpr - Expression to check.
   */
  checkNumberOrExpression(
    qExpr: string
  ): Promise<{
    qErrorMsg: string;
    qBadFieldNames: NxRange[];
  }>;

  /**
   * Adds an alternate state in the app.
   * @param qStateName - Name of the alternate state.
   */
  addAlternateState(qStateName: string): Promise<undefined>;

  /**
   * Removes an alternate state in the app.
   * @param qStateName - Name of the alternate state.
   */
  removeAlternateState(qStateName: string): Promise<undefined>;

  /**
   * Creates a bookmark.
   * @param qProp - Properties for the object.
   */
  createBookmark(
    qProp: GenericBookmarkProperties
  ): Promise<{
    qInfo: NxInfo;
    qReturn: ObjectInterface;
  }>;

  /**
   * Removes a bookmark.
   * @param qId - Identifier of the bookmark.
   */
  destroyBookmark(qId: string): Promise<boolean>;

  /**
   * Returns the handle of a bookmark.
   * @param qId - Identifier of the bookmark.
   */
  getBookmark(qId: string): Promise<ObjectInterface>;

  /**
   * Applies a bookmark.
   * @param qId - Identifier of the bookmark.
   */
  applyBookmark(qId: string): Promise<boolean>;

  /**
   * Clones a bookmark.
   * @param qId - Identifier of the object to clone.
   */
  cloneBookmark(qId: string): Promise<string>;

  /**
   * Adds a field on the fly.
   * @param qName - Name of the field.
   * @param qExpr - Expression value. It is not possible to use all aggregation functions. For example, you cannot add a field on the fly with an expression that uses the _Sum_ or _Count_ aggregation functions.
   */
  addFieldFromExpression(qName: string, qExpr: string): Promise<boolean>;

  /**
   * Find the field-on-the-fly by passing its readable name.
   * @param qReadableName - Readable name of the field-on-the-fly.
   */
  getFieldOnTheFlyByName(qReadableName: string): Promise<string>;

  /**
   * Returns the identifier and the type of any generic object in the app.
   */
  getAllInfos(): Promise<NxInfo[]>;

  /**
   * Resumes the app as the user left it.
   */
  resume(): Promise<undefined>;

  /**
   * Aborts any selection mode in an app. For more information about selection mode, see _BeginSelections method_.
   * @param qAccept - Set this parameter to true to accept the selections before exiting the selection mode.
   */
  abortModal(qAccept: boolean): Promise<undefined>;

  /**
   * Publishes an app.
   * @param qStreamId - Identifier of the stream.
   * @param qName - Name of the published app. If this parameter is not set, the engine automatically gives a new name to the published app.
   */
  publish(qStreamId: string, qName?: string): Promise<undefined>;

  /**
   * Retrieves any fields that match all of the specified tags or just one of them in the data model of an app.
   * @param qTags - List of tags. The _GetMatchingFields_ method looks for fields that match one or all of the tags in this list, depending on the value of _qMatchingFieldMode_ .
   * @param qMatchingFieldMode - Matching field mode. The default value is MATCHINGFIELDMODE_MATCH_ALL.  One of: * MATCHINGFIELDMODE_MATCH_ALL * MATCHINGFIELDMODE_MATCH_ONE
   */
  getMatchingFields(qTags: any[], qMatchingFieldMode?: string): Promise<NxMatchingFieldInfo[]>;

  /**
   * Retrieves any fields that belong to the same archipelago as the specified field and that match at least one of the specified tags.
   * @param qFieldName - Name of the field. This method looks for fields that belong to the same archipelago as this specified field.
   * @param qTags - List of tags. This method looks for fields that match at least one of the tags in this list.
   */
  findMatchingFields(qFieldName: string, qTags: any[]): Promise<NxMatchingFieldInfo[]>;

  /**
   * Scrambles a field so the data is not recognizable. Some properties are retained to help debugging. For example, special characters are not changed, and small numbers are scrambled to another small number.
   * @param qFieldName - Name of the field to scramble.
   */
  scramble(qFieldName: string): Promise<undefined>;

  /**
   * Saves all objects that were modified in the app.
   */
  saveObjects(): Promise<undefined>;

  /**
   * Computes a set of association scores for each pair of fields between two given tables that have been loaded in an app.
   * @param qTable1 - Name of the first table.
   * @param qTable2 - Name of the second table.
   */
  getAssociationScores(qTable1: string, qTable2: string): Promise<AssociationScore[]>;

  /**
   * Lists the media files.
   * @deprecated
   */
  getMediaList(): Promise<{
    qList: MediaList;
    qReturn: boolean;
  }>;

  /**
   * Lists the content libraries.
   */
  getContentLibraries(): Promise<ContentLibraryList>;

  /**
   * Returns the content of a library.
   * @param qName - Name of the content library. It corresponds to the property _qContentLibraryListItem/qName_ returned by the _GetContentLibraries method_.
   */
  getLibraryContent(qName: string): Promise<StaticContentList>;

  /**
   * Reloads the script that is set in an app and returns the path to the script log file.
   */
  doReloadEx(qParams?: DoReloadExParams): Promise<DoReloadExResult>;

  /**
   * Returns the number of entries on the back stack.
   */
  backCount(): Promise<number>;

  /**
   * Returns the number of entries on the Forward stack.
   */
  forwardCount(): Promise<number>;

  /**
   * Applies a bookmark to reduce (slice) the data on. Returns a url and file size to the reduced application. Section Access is always applied.
   * @param qOptions - BookmarkId used to reduced the app on and an expire time.
   */
  exportReducedData(qOptions?: NxDownloadOptions): Promise<NxDownloadInfo>;

  /**
   * Returns a set analysis expression from active selections or from a saved bookmark. Fields on the fly and Calculated dimensions will not be included in the generated expressions, instead a message indicating 'missing fields' will provided within the expression.
   * @param qStateName - Optional. The name of the state to get set analysis expression for. If left empty, the default state will be retrieved.
   * @param qBookmarkId - Optional. The Id of the bookmark to get the set analysis expression for. If left empty, the current selection will be retrieved.
   */
  getSetAnalysis(qStateName?: string, qBookmarkId?: string): Promise<string>;

  /**
   * Sets values in script.
   * @param qScript - Script content.
   */
  setScript(qScript: string): Promise<undefined>;

  /**
   * Checks the syntax of a script.
   */
  checkScriptSyntax(): Promise<ScriptSyntaxError[]>;

  /**
   * Retrieves the variables that are tagged as favorite.
   */
  getFavoriteVariables(): Promise<any[]>;

  /**
   * Set some variables as favorite.
   * @param qNames - Variables to set as favorite.
   */
  setFavoriteVariables(qNames: any[]): Promise<undefined>;

  /**
   * Gets the content of a file.
   * @param qPath - ["lib://CONNECTION_NAME\\\&lt;the name of the file you want to use&gt;.txt"] OR ["lib://Connection_Name\\\&lt;Folder under your connection&gt;\\\&lt;the name of the file you want to use&gt;.txt"] [ ] should be used when the first variable contains a lib reference.
   */
  getIncludeFileContent(qPath: string): Promise<string>;

  /**
   * Creates a connection.
   * @param qConnection - Information about the connection.
   */
  createConnection(qConnection: Connection): Promise<string>;

  /**
   * Updates a connection.
   * @param qConnectionId - Identifier of the connection.
   * @param qConnection - Information about the connection. Properties that can be updated.
   * @param qOverrideCredentials - Set this parameter to true to override the user name and password.
   */
  modifyConnection(qConnectionId: string, qConnection: Connection, qOverrideCredentials?: boolean): Promise<undefined>;

  /**
   * Deletes a connection.
   * @param qConnectionId - Identifier of the connection to remove.
   */
  deleteConnection(qConnectionId: string): Promise<undefined>;

  /**
   * Retrieves a connection and returns:
   * @param qConnectionId - Identifier of the connection.
   */
  getConnection(qConnectionId: string): Promise<Connection>;

  /**
   * Lists the connections in an app.
   */
  getConnections(): Promise<Connection[]>;

  /**
   * Gives information about an ODBC, OLEDB or CUSTOM connection. See _Outputs_ for more details.
   * @param qConnectionId - Name of the connection.
   */
  getDatabaseInfo(qConnectionId: string): Promise<DatabaseInfo>;

  /**
   * Lists the databases inside a ODBC, OLEDB or CUSTOM data source.
   * @param qConnectionId - Identifier of the connection.
   */
  getDatabases(qConnectionId: string): Promise<Database[]>;

  /**
   * Lists the owners of a database for a ODBC, OLEDB or CUSTOM connection.
   * @param qConnectionId - Identifier of the connection.
   * @param qDatabase - Name of the database.
   */
  getDatabaseOwners(qConnectionId: string, qDatabase?: string): Promise<DatabaseOwner[]>;

  /**
   * Lists the tables inside a database for a ODBC, OLEDB or CUSTOM connection.
   * @param qConnectionId - Identifier of the connection.
   * @param qDatabase - Name of the database. If _qDatabase_ is not set then _qOwner_ must be set.
   * @param qOwner - Owner of the database. If _qOwner_ is not set then _qDatabase_ must be set.
   */
  getDatabaseTables(qConnectionId: string, qDatabase?: string, qOwner?: string): Promise<DataTable[]>;

  /**
   * Lists the fields inside a table of a database for a ODBC, OLEDB or CUSTOM connection.
   * @param qConnectionId - Identifier of the connection.
   * @param qDatabase - Name of the database. If _qDatabase_ is not set then _qOwner_ must be set.
   * @param qOwner - Owner of the database. If _qOwner_ is not set then _qDatabase_ must be set.
   * @param qTable - Name of the table.
   */
  getDatabaseTableFields(
    qConnectionId: string,
    qDatabase: string,
    qOwner: string,
    qTable: string
  ): Promise<DataField[]>;

  /**
   * Retrieves the values of the specified table of a database for a ODBC, OLEDB or CUSTOM connection.
   * @param qConnectionId - Identifier of the connection.
   * @param qDatabase - Name of the database. If _qDatabase_ is not set then _qOwner_ must be set.
   * @param qOwner - Owner of the database. If _qOwner_ is not set then _qDatabase_ must be set.
   * @param qTable - Name of the table.
   */
  getDatabaseTablePreview(
    qConnectionId: string,
    qDatabase: string,
    qOwner: string,
    qTable: string,
    qConditions?: FilterInfo
  ): Promise<{
    qPreview: DataRecord[];
    qRowCount: number;
  }>;

  /**
   * Lists the items for a folder connection.
   * @param qConnectionId - Identifier of the connection.
   * @param qRelativePath - Relative path of the connection.
   */
  getFolderItemsForConnection(qConnectionId: string, qRelativePath?: string): Promise<FolderItem[]>;

  /**
   * Guesses the data format for a given file.
   * @param qConnectionId - Identifier of the connection file.
   * @param qRelativePath - Path of the connection file.
   */
  guessFileType(qConnectionId: string, qRelativePath?: string): Promise<FileDataFormat>;

  /**
   * Lists the tables for a folder connection.
   * @param qConnectionId - Identifier of the connection.
   * @param qRelativePath - Path of the connection file.
   * @param qDataFormat - Type of the file.
   */
  getFileTables(qConnectionId: string, qRelativePath: string, qDataFormat: FileDataFormat): Promise<DataTable[]>;

  /**
   * Lists the fields of a table for a folder connection.
   * @param qConnectionId - Identifier of the connection.
   * @param qRelativePath - Path of the connection file.
   * @param qDataFormat - Type of the file.
   * @param qTable - Name of the table. This parameter must be set for _XLS_ , _XLSX_ , _HTML  _ and _XML_ files.
   */
  getFileTableFields(
    qConnectionId: string,
    qRelativePath: string,
    qDataFormat: FileDataFormat,
    qTable: string
  ): Promise<{
    qFields: DataField[];
    qFormatSpec: string;
  }>;

  /**
   * Lists the values in a table for a folder connection.
   * @param qConnectionId - Identifier of the connection.
   * @param qRelativePath - Path of the connection file.
   * @param qDataFormat - Type of the file.
   * @param qTable - Name of the table. This parameter must be set for _XLS_ , _XLSX_ , _HTML  _ and _XML_ files.
   */
  getFileTablePreview(
    qConnectionId: string,
    qRelativePath: string,
    qDataFormat: FileDataFormat,
    qTable: string
  ): Promise<{
    qPreview: DataRecord[];
    qFormatSpec: string;
  }>;

  /**
   * Lists the tables and fields of a JSON or XML file for a folder connection.
   * @param qConnectionId - Identifier of the connection.
   * @param qRelativePath - Path of the connection file.
   * @param qDataFormat - Type of the file.
   */
  getFileTablesEx(qConnectionId: string, qRelativePath: string, qDataFormat: FileDataFormat): Promise<DataTableEx[]>;

  /**
   * Sends a generic command to a custom connector.
   * @param qProvider - Connector file name. Command to be executed by the connector.
   * @param qCommand - One of: * JsonRequest * GetCustomCaption * IsConnected * DisableQlikViewSelectButton * HaveStarField
   * @param qMethod - Method name to be used within the command. The available methods depend on the chosen connector.
   * @param qParameters - Parameters of the command. No parameters are required.
   * @param qAppendConnection - Name of the connection.
   */
  sendGenericCommandToCustomConnector(
    qProvider: string,
    qCommand: string,
    qMethod: string,
    qParameters: any[],
    qAppendConnection: string
  ): Promise<string>;

  /**
   * Returns search terms suggestions.
   * @param qOptions - Information about the search combinations.
   * @param qTerms - Terms to search for.
   */
  searchSuggest(qOptions: SearchCombinationOptions, qTerms: any[]): Promise<SearchSuggestionResult>;

  /**
   * Returns the search matches for one or more search terms.
   * @deprecated
   * @param qOptions - Information about the search fields and the search context.
   * @param qTerms - List of terms to search for.
   * @param qPage - Array of pages to retrieve.
   */
  searchAssociations(
    qOptions: SearchCombinationOptions,
    qTerms: any[],
    qPage: SearchPage
  ): Promise<SearchAssociationResult>;

  /**
   * Selects all search hits for a specified group.
   * @param qOptions - Information about the search fields and the search context.
   * @param qTerms - List of terms to search for.
   * @param qMatchIx - Index (value of _qId_ ) of the search result to select.
   * @param qSoftLock - This parameter is deprecated and should not be set.
   */
  selectAssociations(
    qOptions: SearchCombinationOptions,
    qTerms: any[],
    qMatchIx: number,
    qSoftLock?: boolean
  ): Promise<undefined>;

  /**
   * Returns the search matches for one or more search terms.
   * @param qOptions - Information about the search combinations.
   * @param qTerms - Terms to search for.
   * @param qPage - Array of pages to retrieve.
   */
  searchResults(qOptions: SearchCombinationOptions, qTerms: any[], qPage: SearchPage): Promise<SearchResult>;

  /**
   * Returns the generic objects corresponding to one or more search terms. The search is performed within the title, subtitle, footnote and type. In addition, associated dimension values are also searched in. For example, if the country “Japan” is selected and the object contains the dimension City, the object will appear in the results for “Osaka” but not for “Johannesburg”. The generic objects with the following types will never appear in the results: _slideitem_ , _sheet_ , _story_ , _slide_ , _masterobject_ , _snapshot_ , _LoadModel_ , _appprops_ and _searchhistory_ .
   * @param qOptions - Information about attributes.
   * @param qTerms - Terms to search for.
   * @param qPage - Array of pages to retrieve.
   */
  searchObjects(qOptions: SearchObjectOptions, qTerms: any[], qPage: SearchPage): Promise<SearchResult>;

  /**
   * Get sample values from either a column in a table or from a field.
   * @param qFieldsOrColumnsWithWildcards - Pairs of table (optionally) and field names. Support wildcard matches.
   * @param qMaxNumberOfValues - Max number of sample values returned. Depending on the column or field size the number of returned samples can be less than MaxNumberOfValues. If MaxNumberOfValues is negative all sample values are returned.
   * @param qRandSeed - Optional. Sets the random number seed. Should only be set for test purposes.
   */
  getFieldAndColumnSamples(
    qFieldsOrColumnsWithWildcards: FieldOrColumn,
    qMaxNumberOfValues: number,
    qRandSeed?: number
  ): Promise<SampleResult[]>;

  /**
   * Gets script and script meta-data.
   */
  getScriptEx(): Promise<AppScript>;

  getVariables(qListDef: VariableListDef): Promise<NxVariableListItem[]>;

  /**
   * Expands the expression.
   * @param qExpression - The expression string to expand.
   */
  expandExpression(qExpression: string): Promise<string>;

  /**
   * Removes a transient variable.
   * @param qId - Identifier of the variable.
   */
  destroySessionVariableById(qId: string): Promise<boolean>;

  /**
   * Removes a transient variable.
   * @param qName - Name of the variable.
   */
  destroySessionVariableByName(qName: string): Promise<boolean>;

  /**
   * Creates a bookmark with softpatches.
   * @param qProp - Properties for the object.
   * @param qObjectIdsToPatch - Add softpatches for this objects if available. If empty all softpatches are added to the bookmark.
   */
  createBookmarkEx(
    qProp: GenericBookmarkProperties,
    qObjectIdsToPatch?: any[]
  ): Promise<{
    qInfo: NxInfo;
    qReturn: ObjectInterface;
  }>;

  /**
   * Save a copy of an app with a different name.
   * @param qNewAppName - &lt;Name of the saved app&gt;
   */
  saveAs(qNewAppName: string): Promise<string>;
}

export class Global {
  /**
   * Sets an abort flag on a specific request in the current engine session.
   * @param qRequestId - Identifier of request to abort.
   */
  abortRequest(qRequestId: number): Promise<undefined>;

  /**
   * Sets an abort flag on all pending and ongoing requests in the current engine session.
   */
  abortAll(): Promise<undefined>;

  /**
   * Gives information about the progress of the _DoReload_ and _DoSave_ calls.
   * @param qRequestId - Identifier of the _DoReload_ or _DoSave_ request or 0. Complete information is returned if the identifier of the request is given. If the identifier is 0, less information is given. Progress messages and error messages are returned but information like when the request started and finished is not returned.
   */
  getProgress(qRequestId: number): Promise<ProgressData>;

  /**
   * Returns the Qlik Sense version number.
   * @deprecated
   */
  qvVersion(): Promise<string>;

  /**
   * Returns the version number of the operating system.
   */
  oSVersion(): Promise<string>;

  /**
   * Returns the name of the operating system.
   */
  oSName(): Promise<string>;

  /**
   * Returns the Qlik product name.
   */
  qTProduct(): Promise<string>;

  /**
   * Returns the list of apps.
   */
  getDocList(): Promise<DocListEntry[]>;

  /**
   * Retrieves information on the user interaction that is requested by the engine.
   * @param qRequestId - Identifier of the request. Corresponds to the identifier of the _DoReload_ request.
   */
  getInteract(
    qRequestId: number
  ): Promise<{
    qDef: InteractDef;
    qReturn: boolean;
  }>;

  /**
   * Informs the engine that a user interaction (which was earlier requested by the engine) was performed and indicates to the engine what to do next.
   * @param qRequestId - Identifier of the request. Corresponds to the identifier of the _DoReload_ request.
   * @param qDef - User response to the current interaction.
   */
  interactDone(qRequestId: number, qDef: InteractDef): Promise<undefined>;

  /**
   * Retrieves information about the authenticated user.
   */
  getAuthenticatedUser(): Promise<string>;

  /**
   * Creates an app and opens an engine session.
   * @param qDocName - Name of the app.
   * @param qUserName - Name of the user.
   * @param qPassword - Password of the user.
   * @param qSerial - Current Qlik Sense serial number.
   * @param qLocalizedScriptMainSection - Name of the first section in the script editor. The default value is _Main_.
   */
  createDocEx(
    qDocName: string,
    qUserName?: string,
    qPassword?: string,
    qSerial?: string,
    qLocalizedScriptMainSection?: string
  ): Promise<{
    qDocId: string;
    qReturn: ObjectInterface;
  }>;

  /**
   * Returns the handle of the current app.
   */
  getActiveDoc(): Promise<ObjectInterface>;

  /**
   * Indicates whether or not a user is able to create an app.
   */
  allowCreateApp(): Promise<boolean>;

  /**
   * Creates an app.
   * @param qAppName - Name of the app.
   * @param qLocalizedScriptMainSection - Name of the first section in the script editor. The default value is _Main_.
   */
  createApp(
    qAppName: string,
    qLocalizedScriptMainSection?: string
  ): Promise<{
    qSuccess: boolean;
    qAppId: string;
  }>;

  /**
   * Deletes an app from the Qlik Sense repository or from the file system.
   * @param qAppId - Identifier of the app to delete. In Qlik Sense Enterprise, the identifier of the app is a GUID in the Qlik Sense repository. In Qlik Sense Desktop, the identifier of the app is the name of the app, as defined in the apps folder _%userprofile%\Documents\Qlik\Sense\Apps_.
   */
  deleteApp(qAppId: string): Promise<boolean>;

  /**
   * Indicates whether the user is working in Qlik Sense Desktop.
   */
  isDesktopMode(): Promise<boolean>;

  /**
   * Cancels an ongoing request. The request is stopped.
   * @param qRequestId - Identifier of the request to stop.
   */
  cancelRequest(qRequestId: number): Promise<undefined>;

  /**
   * Shuts down the Qlik engine.
   */
  shutdownProcess(): Promise<undefined>;

  /**
   * Reloads the list of extensions.
   */
  reloadExtensionList(): Promise<undefined>;

  /**
   * Replaces objects of a target app with the objects from a source app.
   * @param qTargetAppId - Identifier (GUID) of the target app. The target app is the app to be replaced.
   * @param qSrcAppID - Identifier (GUID) of the source app. The objects in the source app will replace the objects in the target app.
   * @param qIds - QRS identifiers (GUID) of the objects in the target app to be replaced. Only QRS-approved GUIDs are applicable. An object that is QRS-approved, is for example an object that has been published (for example, not private anymore). If an object is private, it should not be included in this list. If the array of identifiers contains objects that are not present in the source app, the objects related to these identifiers are removed from the target app. If _qIds_ is empty, no objects are deleted in the target app.
   */
  replaceAppFromID(qTargetAppId: string, qSrcAppID: string, qIds: any[]): Promise<boolean>;

  /**
   * Copies an app that is in the Qlik Sense repository.
   * @param qTargetAppId - Identifier (GUID) of the app entity in the Qlik Sense repository. The app entity must have been previously created by the Qlik Sense Repository Service (QRS) API.
   * @param qSrcAppId - Identifier (GUID) of the source app in the Qlik Sense repository.
   * @param qIds - Array of QRS identifiers. The list of all objects in the app to be copied must be given. This list must contain the GUIDs of all these objects. If the list of the QRS identifiers is empty, the _CopyApp_ method copies all objects to the target app. Script-defined variables are automatically copied when copying an app. To be able to copy variables not created via script, the GUID of each variable must be provided in the list of QRS identifiers. To get the QRS identifiers of the objects in an app, you can use the QRS API. The GET method (from the QRS API) returns the identifiers of the objects in the app. The following example returns the QRS identifiers of all the objects in a specified app: GET /qrs/app/9c3f8634-6191-4a34-a114-a39102058d13 Where _9c3f8634-6191-4a34-a114-a39102058d13_ is the identifier of the app.
   */
  copyApp(qTargetAppId: string, qSrcAppId: string, qIds: any[]): Promise<boolean>;

  /**
   * Exports an app from the Qlik Sense repository to the file system.
   * @param qTargetPath - Path and name of the target app.
   * @param qSrcAppId - Identifier of the source app. The identifier is a GUID from the Qlik Sense repository.
   * @param qIds - Array of identifiers. The list of all the objects in the app to be exported must be given. This list must contain the GUIDs of all these objects.
   * @param qNoData - Set this parameter to true if the data should be omitted in the exported app.
   */
  exportApp(qTargetPath: string, qSrcAppId: string, qIds: any[], qNoData?: boolean): Promise<boolean>;

  /**
   * Publishes an app to the supplied stream.
   * @param qAppId - The Id of the app to publish.
   * @param qName - The name of the app to publish.
   * @param qStreamId - The stream Id of the app to publish.
   */
  publishApp(qAppId: string, qName: string, qStreamId: string): Promise<undefined>;

  /**
   * Indicates whether or not the user is working in personal mode (Qlik Sense Desktop).
   * @deprecated
   */
  isPersonalMode(): Promise<boolean>;

  /**
   * Returns the unique identifier of the endpoint for the current user in the current app.
   */
  getUniqueID(): Promise<string>;

  /**
   * Opens an app and checks if the app needs to be migrated (if the app is deprecated).
   * @param qDocName - The GUID (in Qlik Sense Enterprise) or Name (in Qlik Sense Desktop) of the app to retrieve.
   * @param qUserName - Name of the user that opens the app.
   * @param qPassword - Password of the user.
   * @param qSerial - Current Qlik Sense serial number.
   * @param qNoData - Set this parameter to true to be able to open an app without loading its data. When this parameter is set to true, the objects in the app are present but contain no data. The script can be edited and reloaded. The default value is false.
   */
  openDoc(
    qDocName: string,
    qUserName?: string,
    qPassword?: string,
    qSerial?: string,
    qNoData?: boolean
  ): Promise<ObjectInterface>;

  /**
   * Creates an empty session app.
   */
  createSessionApp(): Promise<{
    qSessionAppId: string;
    qReturn: ObjectInterface;
  }>;

  /**
   * Creates a session app from a source app.
   * @param qSrcAppId - App identifier of the source app. It corresponds to _qAppId_ returned by the _CreateApp method_ when creating the source app.
   */
  createSessionAppFromApp(
    qSrcAppId: string
  ): Promise<{
    qSessionAppId: string;
    qReturn: ObjectInterface;
  }>;

  /**
   * Returns the Qlik Sense version number.
   * @deprecated
   */
  productVersion(): Promise<string>;

  /**
   * Retrieves the meta data of an app.
   * @param qAppID - Identifier of the app, as returned by the _CreateApp method_. One of: * Path and name of the app (Qlik Sense Desktop) * GUID (Qlik Sense Enterprise)
   */
  getAppEntry(qAppID: string): Promise<AppEntry>;

  /**
   * Configures the engine's behavior during a reload.
   * @param qCancelOnScriptError - If set to true, the script execution is halted on error. Otherwise, the engine continues the script execution. This parameter is relevant only if the variable _ErrorMode_ is set to 1.
   * @param qUseErrorData - If set to true, any script execution error is returned in _qErrorData_ by the _GetProgress method_.
   * @param qInteractOnError - If set to true, the script execution is halted on error and the engine is waiting for an interaction to be performed. If the result from the interaction is 1 (_qDef.qResult_ is 1), the engine continues the script execution otherwise the execution is halted. This parameter is relevant only if the variable _ErrorMode_ is set to 1 and the script is run in debug mode (_qDebug_ is set to true when calling the _DoReload method_).
   */
  configureReload(qCancelOnScriptError: boolean, qUseErrorData: boolean, qInteractOnError: boolean): Promise<undefined>;

  /**
   * Cancels an ongoing reload. The reload of the app is stopped. The indexation can be canceled and _true_ is still the return value of the reload task.
   */
  cancelReload(): Promise<undefined>;

  /**
   * Gets the current Backus-Naur Form (BNF) grammar of the Qlik engine scripting language. The BNF rules define the syntax for the script statements and the script or chart functions.
   * @deprecated
   * @param qBnfType - Returns a set of rules defining the syntax for: * The script statements and the script functions if _qBnfType_ is set to S. * The chart functions if _qBnfType_ is set to E.  One of: * S or SCRIPT_TEXT_SCRIPT * E or SCRIPT_TEXT_EXPRESSION
   */
  getBNF(qBnfType: string): Promise<BNFDef[]>;

  /**
   * Gets the list of all the script functions.
   * @param qGroup - Name of the group. Default is all groups.  One of: * ALL or FUNC_GROUP_ALL * U or FUNC_GROUP_UNKNOWN * NONE or FUNC_GROUP_NONE * AGGR or FUNC_GROUP_AGGR * NUM or FUNC_GROUP_NUMERIC * RNG or FUNC_GROUP_RANGE * EXP or FUNC_GROUP_EXPONENTIAL_AND_LOGARITHMIC * TRIG or FUNC_GROUP_TRIGONOMETRIC_AND_HYPERBOLIC * FIN or FUNC_GROUP_FINANCIAL * MATH or FUNC_GROUP_MATH_CONSTANT_AND_PARAM_FREE * COUNT or FUNC_GROUP_COUNTER * STR or FUNC_GROUP_STRING * MAPP or FUNC_GROUP_MAPPING * RCRD or FUNC_GROUP_INTER_RECORD * CND or FUNC_GROUP_CONDITIONAL * LOG or FUNC_GROUP_LOGICAL * NULL or FUNC_GROUP_NULL * SYS or FUNC_GROUP_SYSTEM * FILE or FUNC_GROUP_FILE * TBL or FUNC_GROUP_TABLE * DATE or FUNC_GROUP_DATE_AND_TIME * NUMI or FUNC_GROUP_NUMBER_INTERPRET * FRMT or FUNC_GROUP_FORMATTING * CLR or FUNC_GROUP_COLOR * RNK or FUNC_GROUP_RANKING * GEO or FUNC_GROUP_GEO * EXT or FUNC_GROUP_EXTERNAL * PROB or FUNC_GROUP_PROBABILITY * ARRAY or FUNC_GROUP_ARRAY * LEG or FUNC_GROUP_LEGACY
   */
  getFunctions(qGroup?: string): Promise<Function[]>;

  /**
   * Returns the list of the ODBC connectors that are installed in the system.
   */
  getOdbcDsns(): Promise<OdbcDsn[]>;

  /**
   * Returns the list of the OLEDB providers installed on the system.
   */
  getOleDbProviders(): Promise<OleDbProvider[]>;

  /**
   * Lists the databases in a ODBC, OLEDB or CUSTOM data source.
   * @param qConnection - Information about the connection.
   */
  getDatabasesFromConnectionString(qConnection: Connection): Promise<Database[]>;

  /**
   * Checks if a connection string is valid.
   * @param qConnection - Information about the connection.
   */
  isValidConnectionString(qConnection: Connection): Promise<boolean>;

  /**
   * Returns the folder where the apps are stored.
   */
  getDefaultAppFolder(): Promise<string>;

  /**
   * Lists the logical drives in the system.
   */
  getLogicalDriveStrings(): Promise<DriveInfo[]>;

  /**
   * Returns the files and folders located at a specified path.
   * @param qPath - Absolute or relative path. Relative paths are relative to the default _Apps_ folder.  **In Qlik Sense Enterprise:**  The list is generated by the QRS. The GetDocList method only returns documents the current user is allowed to access.  **In Qlik Sense Desktop:**  The apps are located in _C:\Users\&lt;user name&gt;\Documents\Qlik\Sense\Apps_.
   */
  getFolderItemsForPath(qPath: string): Promise<FolderItem[]>;

  /**
   * Lists the supported code pages.
   */
  getSupportedCodePages(): Promise<CodePage[]>;

  /**
   * List the custom connectors available in the system.
   * @param qReloadList - Sets if the list of custom connectors should be reloaded or not. If set to false, only the connectors that were returned the previous time are returned. If new connectors have been added since the last call to the _GetCustomConnectors_ method was made, the new connectors are not returned. If set to true, the _GetCustomConnectors_ method looks for new connectors in the file system. The default value is false.
   */
  getCustomConnectors(qReloadList?: boolean): Promise<CustomConnector[]>;

  /**
   * Lists the streams.
   * @deprecated
   */
  getStreamList(): Promise<NxStreamListEntry[]>;

  /**
   * Returns the version number of the Qlik engine component.
   */
  engineVersion(): Promise<NxEngineVersion>;

  /**
   * Gets the current Backus-Naur Form (BNF) grammar of the Qlik engine scripting language, as well as a string hash calculated from that grammar. The BNF rules define the syntax for the script statements and the script or chart functions. If the hash changes between subsequent calls to this method, this indicates that the BNF has changed.
   * @param qBnfType - The type of grammar to return: * The script statements and the script functions if _qBnfType_ is set to S. * The chart functions if _qBnfType_ is set to E.  One of: * S or SCRIPT_TEXT_SCRIPT * E or SCRIPT_TEXT_EXPRESSION
   */
  getBaseBNF(
    qBnfType: string
  ): Promise<{
    qBnfDefs: BNFDef[];
    qBnfHash: string;
  }>;

  /**
   * Gets a string hash calculated from the current Backus-Naur Form (BNF) grammar of the Qlik engine scripting language. If the hash changes between subsequent calls to this method, this indicates that the BNF grammar has changed.
   * @param qBnfType - The type of grammar to return: * The script statements and the script functions if _qBnfType_ is set to S. * The chart functions if _qBnfType_ is set to E.  One of: * S or SCRIPT_TEXT_SCRIPT * E or SCRIPT_TEXT_EXPRESSION
   */
  getBaseBNFHash(qBnfType: string): Promise<string>;

  /**
   * Gets the current Backus-Naur Form (BNF) grammar of the Qlik engine scripting language, as well as a string hash calculated from that grammar. The BNF rules define the syntax for the script statements and the script or chart functions. If the hash changes between subsequent calls to this method, this indicates that the BNF has changed.
   * @param qBnfType - The type of grammar to return: * S: returns the script statements and the script functions. * E: returns the chart functions.  One of: * S or SCRIPT_TEXT_SCRIPT * E or SCRIPT_TEXT_EXPRESSION
   */
  getBaseBNFString(
    qBnfType: string
  ): Promise<{
    qBnfStr: string;
    qBnfHash: string;
  }>;

  /**
   * Save a copy of an app with a different name.
   * @deprecated
   * @param qNewAppName - &lt;Name of the saved app&gt;
   */
  saveAs(qNewAppName: string): Promise<string>;
}

export const enum NxLocalizedErrorCode {
  LOCERR_INTERNAL_ERROR = 'LOCERR_INTERNAL_ERROR',
  LOCERR_GENERIC_UNKNOWN = 'LOCERR_GENERIC_UNKNOWN',
  LOCERR_GENERIC_OK = 'LOCERR_GENERIC_OK',
  LOCERR_GENERIC_NOT_SET = 'LOCERR_GENERIC_NOT_SET',
  LOCERR_GENERIC_NOT_FOUND = 'LOCERR_GENERIC_NOT_FOUND',
  LOCERR_GENERIC_ALREADY_EXISTS = 'LOCERR_GENERIC_ALREADY_EXISTS',
  LOCERR_GENERIC_INVALID_PATH = 'LOCERR_GENERIC_INVALID_PATH',
  LOCERR_GENERIC_ACCESS_DENIED = 'LOCERR_GENERIC_ACCESS_DENIED',
  LOCERR_GENERIC_OUT_OF_MEMORY = 'LOCERR_GENERIC_OUT_OF_MEMORY',
  LOCERR_GENERIC_NOT_INITIALIZED = 'LOCERR_GENERIC_NOT_INITIALIZED',
  LOCERR_GENERIC_INVALID_PARAMETERS = 'LOCERR_GENERIC_INVALID_PARAMETERS',
  LOCERR_GENERIC_EMPTY_PARAMETERS = 'LOCERR_GENERIC_EMPTY_PARAMETERS',
  LOCERR_GENERIC_INTERNAL_ERROR = 'LOCERR_GENERIC_INTERNAL_ERROR',
  LOCERR_GENERIC_CORRUPT_DATA = 'LOCERR_GENERIC_CORRUPT_DATA',
  LOCERR_GENERIC_MEMORY_INCONSISTENCY = 'LOCERR_GENERIC_MEMORY_INCONSISTENCY',
  LOCERR_GENERIC_INVISIBLE_OWNER_ABORT = 'LOCERR_GENERIC_INVISIBLE_OWNER_ABORT',
  LOCERR_GENERIC_PROHIBIT_VALIDATE = 'LOCERR_GENERIC_PROHIBIT_VALIDATE',
  LOCERR_GENERIC_ABORTED = 'LOCERR_GENERIC_ABORTED',
  LOCERR_GENERIC_CONNECTION_LOST = 'LOCERR_GENERIC_CONNECTION_LOST',
  LOCERR_GENERIC_UNSUPPORTED_IN_PRODUCT_VERSION = 'LOCERR_GENERIC_UNSUPPORTED_IN_PRODUCT_VERSION',
  LOCERR_GENERIC_REST_CONNECTION_FAILURE = 'LOCERR_GENERIC_REST_CONNECTION_FAILURE',
  LOCERR_GENERIC_MEMORY_LIMIT_REACHED = 'LOCERR_GENERIC_MEMORY_LIMIT_REACHED',
  LOCERR_GENERIC_NOT_IMPLEMENTED = 'LOCERR_GENERIC_NOT_IMPLEMENTED',
  LOCERR_HTTP_400 = 'LOCERR_HTTP_400',
  LOCERR_HTTP_401 = 'LOCERR_HTTP_401',
  LOCERR_HTTP_402 = 'LOCERR_HTTP_402',
  LOCERR_HTTP_403 = 'LOCERR_HTTP_403',
  LOCERR_HTTP_404 = 'LOCERR_HTTP_404',
  LOCERR_HTTP_405 = 'LOCERR_HTTP_405',
  LOCERR_HTTP_406 = 'LOCERR_HTTP_406',
  LOCERR_HTTP_407 = 'LOCERR_HTTP_407',
  LOCERR_HTTP_408 = 'LOCERR_HTTP_408',
  LOCERR_HTTP_409 = 'LOCERR_HTTP_409',
  LOCERR_HTTP_410 = 'LOCERR_HTTP_410',
  LOCERR_HTTP_411 = 'LOCERR_HTTP_411',
  LOCERR_HTTP_412 = 'LOCERR_HTTP_412',
  LOCERR_HTTP_413 = 'LOCERR_HTTP_413',
  LOCERR_HTTP_414 = 'LOCERR_HTTP_414',
  LOCERR_HTTP_415 = 'LOCERR_HTTP_415',
  LOCERR_HTTP_416 = 'LOCERR_HTTP_416',
  LOCERR_HTTP_417 = 'LOCERR_HTTP_417',
  LOCERR_HTTP_422 = 'LOCERR_HTTP_422',
  LOCERR_HTTP_429 = 'LOCERR_HTTP_429',
  LOCERR_HTTP_500 = 'LOCERR_HTTP_500',
  LOCERR_HTTP_501 = 'LOCERR_HTTP_501',
  LOCERR_HTTP_502 = 'LOCERR_HTTP_502',
  LOCERR_HTTP_503 = 'LOCERR_HTTP_503',
  LOCERR_HTTP_504 = 'LOCERR_HTTP_504',
  LOCERR_HTTP_505 = 'LOCERR_HTTP_505',
  LOCERR_HTTP_509 = 'LOCERR_HTTP_509',
  LOCERR_HTTP_COULD_NOT_RESOLVE_HOST = 'LOCERR_HTTP_COULD_NOT_RESOLVE_HOST',
  LOCERR_APP_ALREADY_EXISTS = 'LOCERR_APP_ALREADY_EXISTS',
  LOCERR_APP_INVALID_NAME = 'LOCERR_APP_INVALID_NAME',
  LOCERR_APP_ALREADY_OPEN = 'LOCERR_APP_ALREADY_OPEN',
  LOCERR_APP_NOT_FOUND = 'LOCERR_APP_NOT_FOUND',
  LOCERR_APP_IMPORT_FAILED = 'LOCERR_APP_IMPORT_FAILED',
  LOCERR_APP_SAVE_FAILED = 'LOCERR_APP_SAVE_FAILED',
  LOCERR_APP_CREATE_FAILED = 'LOCERR_APP_CREATE_FAILED',
  LOCERR_APP_INVALID = 'LOCERR_APP_INVALID',
  LOCERR_APP_CONNECT_FAILED = 'LOCERR_APP_CONNECT_FAILED',
  LOCERR_APP_ALREADY_OPEN_IN_DIFFERENT_MODE = 'LOCERR_APP_ALREADY_OPEN_IN_DIFFERENT_MODE',
  LOCERR_APP_MIGRATION_COULD_NOT_CONTACT_MIGRATION_SERVICE = 'LOCERR_APP_MIGRATION_COULD_NOT_CONTACT_MIGRATION_SERVICE',
  LOCERR_APP_MIGRATION_COULD_NOT_START_MIGRATION = 'LOCERR_APP_MIGRATION_COULD_NOT_START_MIGRATION',
  LOCERR_APP_MIGRATION_FAILURE = 'LOCERR_APP_MIGRATION_FAILURE',
  LOCERR_APP_SCRIPT_MISSING = 'LOCERR_APP_SCRIPT_MISSING',
  LOCERR_APP_EXPORT_FAILED = 'LOCERR_APP_EXPORT_FAILED',
  LOCERR_CONNECTION_ALREADY_EXISTS = 'LOCERR_CONNECTION_ALREADY_EXISTS',
  LOCERR_CONNECTION_NOT_FOUND = 'LOCERR_CONNECTION_NOT_FOUND',
  LOCERR_CONNECTION_FAILED_TO_LOAD = 'LOCERR_CONNECTION_FAILED_TO_LOAD',
  LOCERR_CONNECTION_FAILED_TO_IMPORT = 'LOCERR_CONNECTION_FAILED_TO_IMPORT',
  LOCERR_CONNECTION_NAME_IS_INVALID = 'LOCERR_CONNECTION_NAME_IS_INVALID',
  LOCERR_CONNECTOR_NO_FILE_STREAMING_SUPPORT = 'LOCERR_CONNECTOR_NO_FILE_STREAMING_SUPPORT',
  LOCERR_CONNECTOR_FILESIZE_EXCEEDED_BUFFER_SIZE = 'LOCERR_CONNECTOR_FILESIZE_EXCEEDED_BUFFER_SIZE',
  LOCERR_FILE_ACCESS_DENIED = 'LOCERR_FILE_ACCESS_DENIED',
  LOCERR_FILE_NAME_INVALID = 'LOCERR_FILE_NAME_INVALID',
  LOCERR_FILE_CORRUPT = 'LOCERR_FILE_CORRUPT',
  LOCERR_FILE_NOT_FOUND = 'LOCERR_FILE_NOT_FOUND',
  LOCERR_FILE_FORMAT_UNSUPPORTED = 'LOCERR_FILE_FORMAT_UNSUPPORTED',
  LOCERR_FILE_OPENED_IN_UNSUPPORTED_MODE = 'LOCERR_FILE_OPENED_IN_UNSUPPORTED_MODE',
  LOCERR_FILE_TABLE_NOT_FOUND = 'LOCERR_FILE_TABLE_NOT_FOUND',
  LOCERR_USER_ACCESS_DENIED = 'LOCERR_USER_ACCESS_DENIED',
  LOCERR_USER_IMPERSONATION_FAILED = 'LOCERR_USER_IMPERSONATION_FAILED',
  LOCERR_SERVER_OUT_OF_SESSION_AND_USER_CALS = 'LOCERR_SERVER_OUT_OF_SESSION_AND_USER_CALS',
  LOCERR_SERVER_OUT_OF_SESSION_CALS = 'LOCERR_SERVER_OUT_OF_SESSION_CALS',
  LOCERR_SERVER_OUT_OF_USAGE_CALS = 'LOCERR_SERVER_OUT_OF_USAGE_CALS',
  LOCERR_SERVER_OUT_OF_CALS = 'LOCERR_SERVER_OUT_OF_CALS',
  LOCERR_SERVER_OUT_OF_NAMED_CALS = 'LOCERR_SERVER_OUT_OF_NAMED_CALS',
  LOCERR_SERVER_OFF_DUTY = 'LOCERR_SERVER_OFF_DUTY',
  LOCERR_SERVER_BUSY = 'LOCERR_SERVER_BUSY',
  LOCERR_SERVER_LICENSE_EXPIRED = 'LOCERR_SERVER_LICENSE_EXPIRED',
  LOCERR_SERVER_AJAX_DISABLED = 'LOCERR_SERVER_AJAX_DISABLED',
  LOCERR_SERVER_NO_TOKEN = 'LOCERR_SERVER_NO_TOKEN',
  LOCERR_HC_INVALID_OBJECT = 'LOCERR_HC_INVALID_OBJECT',
  LOCERR_HC_RESULT_TOO_LARGE = 'LOCERR_HC_RESULT_TOO_LARGE',
  LOCERR_HC_INVALID_OBJECT_STATE = 'LOCERR_HC_INVALID_OBJECT_STATE',
  LOCERR_HC_MODAL_OBJECT_ERROR = 'LOCERR_HC_MODAL_OBJECT_ERROR',
  LOCERR_CALC_INVALID_DEF = 'LOCERR_CALC_INVALID_DEF',
  LOCERR_CALC_NOT_IN_LIB = 'LOCERR_CALC_NOT_IN_LIB',
  LOCERR_CALC_HEAP_ERROR = 'LOCERR_CALC_HEAP_ERROR',
  LOCERR_CALC_TOO_LARGE = 'LOCERR_CALC_TOO_LARGE',
  LOCERR_CALC_TIMEOUT = 'LOCERR_CALC_TIMEOUT',
  LOCERR_CALC_EVAL_CONDITION_FAILED = 'LOCERR_CALC_EVAL_CONDITION_FAILED',
  LOCERR_CALC_MIXED_LINKED_AGGREGATION = 'LOCERR_CALC_MIXED_LINKED_AGGREGATION',
  LOCERR_CALC_MISSING_LINKED = 'LOCERR_CALC_MISSING_LINKED',
  LOCERR_CALC_INVALID_COL_SORT = 'LOCERR_CALC_INVALID_COL_SORT',
  LOCERR_CALC_PAGES_TOO_LARGE = 'LOCERR_CALC_PAGES_TOO_LARGE',
  LOCERR_CALC_SEMANTIC_FIELD_NOT_ALLOWED = 'LOCERR_CALC_SEMANTIC_FIELD_NOT_ALLOWED',
  LOCERR_CALC_VALIDATION_STATE_INVALID = 'LOCERR_CALC_VALIDATION_STATE_INVALID',
  LOCERR_CALC_PIVOT_DIMENSIONS_ALREADY_EXISTS = 'LOCERR_CALC_PIVOT_DIMENSIONS_ALREADY_EXISTS',
  LOCERR_CALC_MISSING_LINKED_FIELD = 'LOCERR_CALC_MISSING_LINKED_FIELD',
  LOCERR_CALC_NOT_CALCULATED = 'LOCERR_CALC_NOT_CALCULATED',
  LOCERR_LAYOUT_EXTENDS_INVALID_ID = 'LOCERR_LAYOUT_EXTENDS_INVALID_ID',
  LOCERR_LAYOUT_LINKED_OBJECT_NOT_FOUND = 'LOCERR_LAYOUT_LINKED_OBJECT_NOT_FOUND',
  LOCERR_LAYOUT_LINKED_OBJECT_INVALID = 'LOCERR_LAYOUT_LINKED_OBJECT_INVALID',
  LOCERR_PERSISTENCE_WRITE_FAILED = 'LOCERR_PERSISTENCE_WRITE_FAILED',
  LOCERR_PERSISTENCE_READ_FAILED = 'LOCERR_PERSISTENCE_READ_FAILED',
  LOCERR_PERSISTENCE_DELETE_FAILED = 'LOCERR_PERSISTENCE_DELETE_FAILED',
  LOCERR_PERSISTENCE_NOT_FOUND = 'LOCERR_PERSISTENCE_NOT_FOUND',
  LOCERR_PERSISTENCE_UNSUPPORTED_VERSION = 'LOCERR_PERSISTENCE_UNSUPPORTED_VERSION',
  LOCERR_PERSISTENCE_MIGRATION_FAILED_READ_ONLY = 'LOCERR_PERSISTENCE_MIGRATION_FAILED_READ_ONLY',
  LOCERR_PERSISTENCE_MIGRATION_CANCELLED = 'LOCERR_PERSISTENCE_MIGRATION_CANCELLED',
  LOCERR_PERSISTENCE_MIGRATION_BACKUP_FAILED = 'LOCERR_PERSISTENCE_MIGRATION_BACKUP_FAILED',
  LOCERR_PERSISTENCE_DISK_FULL = 'LOCERR_PERSISTENCE_DISK_FULL',
  LOCERR_PERSISTENCE_NOT_SUPPORTED_FOR_SESSION_APP = 'LOCERR_PERSISTENCE_NOT_SUPPORTED_FOR_SESSION_APP',
  LOCERR_PERSISTENCE_MOVE_FAILED = 'LOCERR_PERSISTENCE_MOVE_FAILED',
  LOCERR_PERSISTENCE_SYNC_SET_CHUNK_INVALID_PARAMETERS = 'LOCERR_PERSISTENCE_SYNC_SET_CHUNK_INVALID_PARAMETERS',
  LOCERR_PERSISTENCE_SYNC_GET_CHUNK_INVALID_PARAMETERS = 'LOCERR_PERSISTENCE_SYNC_GET_CHUNK_INVALID_PARAMETERS',
  LOCERR_SCRIPT_DATASOURCE_ACCESS_DENIED = 'LOCERR_SCRIPT_DATASOURCE_ACCESS_DENIED',
  LOCERR_RELOAD_IN_PROGRESS = 'LOCERR_RELOAD_IN_PROGRESS',
  LOCERR_RELOAD_TABLE_X_NOT_FOUND = 'LOCERR_RELOAD_TABLE_X_NOT_FOUND',
  LOCERR_RELOAD_UNKNOWN_STATEMENT = 'LOCERR_RELOAD_UNKNOWN_STATEMENT',
  LOCERR_RELOAD_EXPECTED_SOMETHING_FOUND_UNKNOWN = 'LOCERR_RELOAD_EXPECTED_SOMETHING_FOUND_UNKNOWN',
  LOCERR_RELOAD_EXPECTED_NOTHING_FOUND_UNKNOWN = 'LOCERR_RELOAD_EXPECTED_NOTHING_FOUND_UNKNOWN',
  LOCERR_RELOAD_EXPECTED_ONE_OF_1_TOKENS_FOUND_UNKNOWN = 'LOCERR_RELOAD_EXPECTED_ONE_OF_1_TOKENS_FOUND_UNKNOWN',
  LOCERR_RELOAD_EXPECTED_ONE_OF_2_TOKENS_FOUND_UNKNOWN = 'LOCERR_RELOAD_EXPECTED_ONE_OF_2_TOKENS_FOUND_UNKNOWN',
  LOCERR_RELOAD_EXPECTED_ONE_OF_3_TOKENS_FOUND_UNKNOWN = 'LOCERR_RELOAD_EXPECTED_ONE_OF_3_TOKENS_FOUND_UNKNOWN',
  LOCERR_RELOAD_EXPECTED_ONE_OF_4_TOKENS_FOUND_UNKNOWN = 'LOCERR_RELOAD_EXPECTED_ONE_OF_4_TOKENS_FOUND_UNKNOWN',
  LOCERR_RELOAD_EXPECTED_ONE_OF_5_TOKENS_FOUND_UNKNOWN = 'LOCERR_RELOAD_EXPECTED_ONE_OF_5_TOKENS_FOUND_UNKNOWN',
  LOCERR_RELOAD_EXPECTED_ONE_OF_6_TOKENS_FOUND_UNKNOWN = 'LOCERR_RELOAD_EXPECTED_ONE_OF_6_TOKENS_FOUND_UNKNOWN',
  LOCERR_RELOAD_EXPECTED_ONE_OF_7_TOKENS_FOUND_UNKNOWN = 'LOCERR_RELOAD_EXPECTED_ONE_OF_7_TOKENS_FOUND_UNKNOWN',
  LOCERR_RELOAD_EXPECTED_ONE_OF_8_OR_MORE_TOKENS_FOUND_UNKNOWN = 'LOCERR_RELOAD_EXPECTED_ONE_OF_8_OR_MORE_TOKENS_FOUND_UNKNOWN',
  LOCERR_RELOAD_FIELD_X_NOT_FOUND = 'LOCERR_RELOAD_FIELD_X_NOT_FOUND',
  LOCERR_RELOAD_MAPPING_TABLE_X_NOT_FOUND = 'LOCERR_RELOAD_MAPPING_TABLE_X_NOT_FOUND',
  LOCERR_RELOAD_LIB_CONNECTION_X_NOT_FOUND = 'LOCERR_RELOAD_LIB_CONNECTION_X_NOT_FOUND',
  LOCERR_RELOAD_NAME_ALREADY_TAKEN = 'LOCERR_RELOAD_NAME_ALREADY_TAKEN',
  LOCERR_RELOAD_WRONG_FILE_FORMAT_DIF = 'LOCERR_RELOAD_WRONG_FILE_FORMAT_DIF',
  LOCERR_RELOAD_WRONG_FILE_FORMAT_BIFF = 'LOCERR_RELOAD_WRONG_FILE_FORMAT_BIFF',
  LOCERR_RELOAD_WRONG_FILE_FORMAT_ENCRYPTED = 'LOCERR_RELOAD_WRONG_FILE_FORMAT_ENCRYPTED',
  LOCERR_RELOAD_OPEN_FILE_ERROR = 'LOCERR_RELOAD_OPEN_FILE_ERROR',
  LOCERR_RELOAD_AUTO_GENERATE_COUNT = 'LOCERR_RELOAD_AUTO_GENERATE_COUNT',
  LOCERR_RELOAD_PE_ILLEGAL_PREFIX_COMB = 'LOCERR_RELOAD_PE_ILLEGAL_PREFIX_COMB',
  LOCERR_RELOAD_MATCHING_CONTROL_STATEMENT_ERROR = 'LOCERR_RELOAD_MATCHING_CONTROL_STATEMENT_ERROR',
  LOCERR_RELOAD_MATCHING_LIBPATH_X_NOT_FOUND = 'LOCERR_RELOAD_MATCHING_LIBPATH_X_NOT_FOUND',
  LOCERR_RELOAD_MATCHING_LIBPATH_X_INVALID = 'LOCERR_RELOAD_MATCHING_LIBPATH_X_INVALID',
  LOCERR_RELOAD_MATCHING_LIBPATH_X_OUTSIDE = 'LOCERR_RELOAD_MATCHING_LIBPATH_X_OUTSIDE',
  LOCERR_RELOAD_NO_QUALIFIED_PATH_FOR_FILE = 'LOCERR_RELOAD_NO_QUALIFIED_PATH_FOR_FILE',
  LOCERR_RELOAD_MODE_STATEMENT_ONLY_FOR_LIB_PATHS = 'LOCERR_RELOAD_MODE_STATEMENT_ONLY_FOR_LIB_PATHS',
  LOCERR_RELOAD_INCONSISTENT_USE_OF_SEMANTIC_FIELDS = 'LOCERR_RELOAD_INCONSISTENT_USE_OF_SEMANTIC_FIELDS',
  LOCERR_RELOAD_NO_OPEN_DATABASE = 'LOCERR_RELOAD_NO_OPEN_DATABASE',
  LOCERR_RELOAD_AGGREGATION_REQUIRED_BY_GROUP_BY = 'LOCERR_RELOAD_AGGREGATION_REQUIRED_BY_GROUP_BY',
  LOCERR_RELOAD_CONNECT_MUST_USE_LIB_PREFIX_IN_THIS_MODE = 'LOCERR_RELOAD_CONNECT_MUST_USE_LIB_PREFIX_IN_THIS_MODE',
  LOCERR_RELOAD_ODBC_CONNECT_FAILED = 'LOCERR_RELOAD_ODBC_CONNECT_FAILED',
  LOCERR_RELOAD_OLEDB_CONNECT_FAILED = 'LOCERR_RELOAD_OLEDB_CONNECT_FAILED',
  LOCERR_RELOAD_CUSTOM_CONNECT_FAILED = 'LOCERR_RELOAD_CUSTOM_CONNECT_FAILED',
  LOCERR_RELOAD_ODBC_READ_FAILED = 'LOCERR_RELOAD_ODBC_READ_FAILED',
  LOCERR_RELOAD_OLEDB_READ_FAILED = 'LOCERR_RELOAD_OLEDB_READ_FAILED',
  LOCERR_RELOAD_CUSTOM_READ_FAILED = 'LOCERR_RELOAD_CUSTOM_READ_FAILED',
  LOCERR_RELOAD_BINARY_LOAD_PROHIBITED = 'LOCERR_RELOAD_BINARY_LOAD_PROHIBITED',
  LOCERR_RELOAD_CONNECTOR_START_FAILED = 'LOCERR_RELOAD_CONNECTOR_START_FAILED',
  LOCERR_RELOAD_CONNECTOR_NOT_RESPONDING = 'LOCERR_RELOAD_CONNECTOR_NOT_RESPONDING',
  LOCERR_RELOAD_CONNECTOR_REPLY_ERROR = 'LOCERR_RELOAD_CONNECTOR_REPLY_ERROR',
  LOCERR_RELOAD_CONNECTOR_CONNECT_ERROR = 'LOCERR_RELOAD_CONNECTOR_CONNECT_ERROR',
  LOCERR_RELOAD_CONNECTOR_NOT_FOUND_ERROR = 'LOCERR_RELOAD_CONNECTOR_NOT_FOUND_ERROR',
  LOCERR_RELOAD_INPUT_FIELD_WITH_DUPLICATE_KEYS = 'LOCERR_RELOAD_INPUT_FIELD_WITH_DUPLICATE_KEYS',
  LOCERR_RELOAD_CONCATENATE_LOAD_NO_PREVIOUS_TABLE = 'LOCERR_RELOAD_CONCATENATE_LOAD_NO_PREVIOUS_TABLE',
  LOCERR_RELOAD_WRONG_FILE_FORMAT_QVD = 'LOCERR_RELOAD_WRONG_FILE_FORMAT_QVD',
  LOCERR_PERSONAL_NEW_VERSION_AVAILABLE = 'LOCERR_PERSONAL_NEW_VERSION_AVAILABLE',
  LOCERR_PERSONAL_VERSION_EXPIRED = 'LOCERR_PERSONAL_VERSION_EXPIRED',
  LOCERR_PERSONAL_SECTION_ACCESS_DETECTED = 'LOCERR_PERSONAL_SECTION_ACCESS_DETECTED',
  LOCERR_PERSONAL_APP_DELETION_FAILED = 'LOCERR_PERSONAL_APP_DELETION_FAILED',
  LOCERR_USER_AUTHENTICATION_FAILURE = 'LOCERR_USER_AUTHENTICATION_FAILURE',
  LOCERR_EXPORT_OUT_OF_MEMORY = 'LOCERR_EXPORT_OUT_OF_MEMORY',
  LOCERR_EXPORT_NO_DATA = 'LOCERR_EXPORT_NO_DATA',
  LOCERR_SYNC_INVALID_OFFSET = 'LOCERR_SYNC_INVALID_OFFSET',
  LOCERR_SEARCH_TIMEOUT = 'LOCERR_SEARCH_TIMEOUT',
  LOCERR_DIRECT_DISCOVERY_LINKED_EXPRESSION_FAIL = 'LOCERR_DIRECT_DISCOVERY_LINKED_EXPRESSION_FAIL',
  LOCERR_DIRECT_DISCOVERY_ROWCOUNT_OVERFLOW = 'LOCERR_DIRECT_DISCOVERY_ROWCOUNT_OVERFLOW',
  LOCERR_DIRECT_DISCOVERY_EMPTY_RESULT = 'LOCERR_DIRECT_DISCOVERY_EMPTY_RESULT',
  LOCERR_DIRECT_DISCOVERY_DB_CONNECTION_FAILED = 'LOCERR_DIRECT_DISCOVERY_DB_CONNECTION_FAILED',
  LOCERR_DIRECT_DISCOVERY_MEASURE_NOT_ALLOWED = 'LOCERR_DIRECT_DISCOVERY_MEASURE_NOT_ALLOWED',
  LOCERR_DIRECT_DISCOVERY_DETAIL_NOT_ALLOWED = 'LOCERR_DIRECT_DISCOVERY_DETAIL_NOT_ALLOWED',
  LOCERR_DIRECT_DISCOVERY_NOT_SYNTH_CIRCULAR_ALLOWED = 'LOCERR_DIRECT_DISCOVERY_NOT_SYNTH_CIRCULAR_ALLOWED',
  LOCERR_DIRECT_DISCOVERY_ONLY_ONE_DD_TABLE_ALLOWED = 'LOCERR_DIRECT_DISCOVERY_ONLY_ONE_DD_TABLE_ALLOWED',
  LOCERR_DIRECT_DISCOVERY_DB_AUTHORIZATION_FAILED = 'LOCERR_DIRECT_DISCOVERY_DB_AUTHORIZATION_FAILED',
  LOCERR_SMART_LOAD_TABLE_NOT_FOUND = 'LOCERR_SMART_LOAD_TABLE_NOT_FOUND',
  LOCERR_SMART_LOAD_TABLE_DUPLICATED = 'LOCERR_SMART_LOAD_TABLE_DUPLICATED',
  LOCERR_VARIABLE_NO_NAME = 'LOCERR_VARIABLE_NO_NAME',
  LOCERR_VARIABLE_DUPLICATE_NAME = 'LOCERR_VARIABLE_DUPLICATE_NAME',
  LOCERR_VARIABLE_INCONSISTENCY = 'LOCERR_VARIABLE_INCONSISTENCY',
  LOCERR_MEDIA_LIBRARY_LIST_FAILED = 'LOCERR_MEDIA_LIBRARY_LIST_FAILED',
  LOCERR_MEDIA_LIBRARY_CONTENT_FAILED = 'LOCERR_MEDIA_LIBRARY_CONTENT_FAILED',
  LOCERR_MEDIA_BUNDLING_FAILED = 'LOCERR_MEDIA_BUNDLING_FAILED',
  LOCERR_MEDIA_UNBUNDLING_FAILED = 'LOCERR_MEDIA_UNBUNDLING_FAILED',
  LOCERR_MEDIA_LIBRARY_NOT_FOUND = 'LOCERR_MEDIA_LIBRARY_NOT_FOUND',
  LOCERR_FEATURE_DISABLED = 'LOCERR_FEATURE_DISABLED',
  LOCERR_JSON_RPC_INVALID_REQUEST = 'LOCERR_JSON_RPC_INVALID_REQUEST',
  LOCERR_JSON_RPC_METHOD_NOT_FOUND = 'LOCERR_JSON_RPC_METHOD_NOT_FOUND',
  LOCERR_JSON_RPC_INVALID_PARAMETERS = 'LOCERR_JSON_RPC_INVALID_PARAMETERS',
  LOCERR_JSON_RPC_INTERNAL_ERROR = 'LOCERR_JSON_RPC_INTERNAL_ERROR',
  LOCERR_JSON_RPC_PARSE_ERROR = 'LOCERR_JSON_RPC_PARSE_ERROR',
  LOCERR_MQ_SOCKET_CONNECT_FAILURE = 'LOCERR_MQ_SOCKET_CONNECT_FAILURE',
  LOCERR_MQ_SOCKET_OPEN_FAILURE = 'LOCERR_MQ_SOCKET_OPEN_FAILURE',
  LOCERR_MQ_PROTOCOL_NO_RESPONE = 'LOCERR_MQ_PROTOCOL_NO_RESPONE',
  LOCERR_MQ_PROTOCOL_LIBRARY_EXCEPTION = 'LOCERR_MQ_PROTOCOL_LIBRARY_EXCEPTION',
  LOCERR_MQ_PROTOCOL_CONNECTION_CLOSED = 'LOCERR_MQ_PROTOCOL_CONNECTION_CLOSED',
  LOCERR_MQ_PROTOCOL_CHANNEL_CLOSED = 'LOCERR_MQ_PROTOCOL_CHANNEL_CLOSED',
  LOCERR_MQ_PROTOCOL_UNKNOWN_ERROR = 'LOCERR_MQ_PROTOCOL_UNKNOWN_ERROR',
  LOCERR_MQ_PROTOCOL_INVALID_STATUS = 'LOCERR_MQ_PROTOCOL_INVALID_STATUS',
  LOCERR_EXTENGINE_GRPC_STATUS_OK = 'LOCERR_EXTENGINE_GRPC_STATUS_OK',
  LOCERR_EXTENGINE_GRPC_STATUS_CANCELLED = 'LOCERR_EXTENGINE_GRPC_STATUS_CANCELLED',
  LOCERR_EXTENGINE_GRPC_STATUS_UNKNOWN = 'LOCERR_EXTENGINE_GRPC_STATUS_UNKNOWN',
  LOCERR_EXTENGINE_GRPC_STATUS_INVALID_ARGUMENT = 'LOCERR_EXTENGINE_GRPC_STATUS_INVALID_ARGUMENT',
  LOCERR_EXTENGINE_GRPC_STATUS_DEADLINE_EXCEEDED = 'LOCERR_EXTENGINE_GRPC_STATUS_DEADLINE_EXCEEDED',
  LOCERR_EXTENGINE_GRPC_STATUS_NOT_FOUND = 'LOCERR_EXTENGINE_GRPC_STATUS_NOT_FOUND',
  LOCERR_EXTENGINE_GRPC_STATUS_ALREADY_EXISTS = 'LOCERR_EXTENGINE_GRPC_STATUS_ALREADY_EXISTS',
  LOCERR_EXTENGINE_GRPC_STATUS_PERMISSION_DENIED = 'LOCERR_EXTENGINE_GRPC_STATUS_PERMISSION_DENIED',
  LOCERR_EXTENGINE_GRPC_STATUS_RESOURCE_EXHAUSTED = 'LOCERR_EXTENGINE_GRPC_STATUS_RESOURCE_EXHAUSTED',
  LOCERR_EXTENGINE_GRPC_STATUS_FAILED_PRECONDITION = 'LOCERR_EXTENGINE_GRPC_STATUS_FAILED_PRECONDITION',
  LOCERR_EXTENGINE_GRPC_STATUS_ABORTED = 'LOCERR_EXTENGINE_GRPC_STATUS_ABORTED',
  LOCERR_EXTENGINE_GRPC_STATUS_OUT_OF_RANGE = 'LOCERR_EXTENGINE_GRPC_STATUS_OUT_OF_RANGE',
  LOCERR_EXTENGINE_GRPC_STATUS_UNIMPLEMENTED = 'LOCERR_EXTENGINE_GRPC_STATUS_UNIMPLEMENTED',
  LOCERR_EXTENGINE_GRPC_STATUS_INTERNAL = 'LOCERR_EXTENGINE_GRPC_STATUS_INTERNAL',
  LOCERR_EXTENGINE_GRPC_STATUS_UNAVAILABLE = 'LOCERR_EXTENGINE_GRPC_STATUS_UNAVAILABLE',
  LOCERR_EXTENGINE_GRPC_STATUS_DATA_LOSS = 'LOCERR_EXTENGINE_GRPC_STATUS_DATA_LOSS',
  LOCERR_EXTENGINE_GRPC_STATUS_UNAUTHENTICATED = 'LOCERR_EXTENGINE_GRPC_STATUS_UNAUTHENTICATED',
  LOCERR_LXW_INVALID_OBJ = 'LOCERR_LXW_INVALID_OBJ',
  LOCERR_LXW_INVALID_FILE = 'LOCERR_LXW_INVALID_FILE',
  LOCERR_LXW_INVALID_SHEET = 'LOCERR_LXW_INVALID_SHEET',
  LOCERR_LXW_INVALID_EXPORT_RANGE = 'LOCERR_LXW_INVALID_EXPORT_RANGE',
  LOCERR_LXW_ERROR = 'LOCERR_LXW_ERROR',
  LOCERR_LXW_ERROR_MEMORY_MALLOC_FAILED = 'LOCERR_LXW_ERROR_MEMORY_MALLOC_FAILED',
  LOCERR_LXW_ERROR_CREATING_XLSX_FILE = 'LOCERR_LXW_ERROR_CREATING_XLSX_FILE',
  LOCERR_LXW_ERROR_CREATING_TMPFILE = 'LOCERR_LXW_ERROR_CREATING_TMPFILE',
  LOCERR_LXW_ERROR_ZIP_FILE_OPERATION = 'LOCERR_LXW_ERROR_ZIP_FILE_OPERATION',
  LOCERR_LXW_ERROR_ZIP_FILE_ADD = 'LOCERR_LXW_ERROR_ZIP_FILE_ADD',
  LOCERR_LXW_ERROR_ZIP_CLOSE = 'LOCERR_LXW_ERROR_ZIP_CLOSE',
  LOCERR_LXW_ERROR_NULL_PARAMETER_IGNORED = 'LOCERR_LXW_ERROR_NULL_PARAMETER_IGNORED',
  LOCERR_LXW_ERROR_MAX_STRING_LENGTH_EXCEEDED = 'LOCERR_LXW_ERROR_MAX_STRING_LENGTH_EXCEEDED',
  LOCERR_LXW_ERROR_255_STRING_LENGTH_EXCEEDED = 'LOCERR_LXW_ERROR_255_STRING_LENGTH_EXCEEDED',
  LOCERR_LXW_ERROR_SHARED_STRING_INDEX_NOT_FOUND = 'LOCERR_LXW_ERROR_SHARED_STRING_INDEX_NOT_FOUND',
  LOCERR_LXW_ERROR_WORKSHEET_INDEX_OUT_OF_RANGE = 'LOCERR_LXW_ERROR_WORKSHEET_INDEX_OUT_OF_RANGE',
  LOCERR_LXW_ERROR_WORKSHEET_MAX_NUMBER_URLS_EXCEEDED = 'LOCERR_LXW_ERROR_WORKSHEET_MAX_NUMBER_URLS_EXCEEDED',
  LOCERR_BDI_STATUS_OK = 'LOCERR_BDI_STATUS_OK',
  LOCERR_BDI_GENERIC_ERROR_NOT_TRANSLATED = 'LOCERR_BDI_GENERIC_ERROR_NOT_TRANSLATED',
  LOCERR_TRENDLINE_INVALID_DEF = 'LOCERR_TRENDLINE_INVALID_DEF',
  LOCERR_TRENDLINE_INVALID_MATH_ERROR = 'LOCERR_TRENDLINE_INVALID_MATH_ERROR',
  LOCERR_CURL_UNSUPPORTED_PROTOCOL = 'LOCERR_CURL_UNSUPPORTED_PROTOCOL',
  LOCERR_CURL_COULDNT_RESOLVE_PROXY = 'LOCERR_CURL_COULDNT_RESOLVE_PROXY',
  LOCERR_CURL_COULDNT_CONNECT = 'LOCERR_CURL_COULDNT_CONNECT',
  LOCERR_CURL_REMOTE_ACCESS_DENIED = 'LOCERR_CURL_REMOTE_ACCESS_DENIED',
  LOCERR_CURL_FTP_ACCEPT_FAILED = 'LOCERR_CURL_FTP_ACCEPT_FAILED',
  LOCERR_CURL_FTP_ACCEPT_TIMEOUT = 'LOCERR_CURL_FTP_ACCEPT_TIMEOUT',
  LOCERR_CURL_FTP_CANT_GET_HOST = 'LOCERR_CURL_FTP_CANT_GET_HOST',
  LOCERR_CURL_PARTIAL_FILE = 'LOCERR_CURL_PARTIAL_FILE',
  LOCERR_CURL_QUOTE_ERROR = 'LOCERR_CURL_QUOTE_ERROR',
  LOCERR_CURL_WRITE_ERROR = 'LOCERR_CURL_WRITE_ERROR',
  LOCERR_CURL_UPLOAD_FAILED = 'LOCERR_CURL_UPLOAD_FAILED',
  LOCERR_CURL_OUT_OF_MEMORY = 'LOCERR_CURL_OUT_OF_MEMORY',
  LOCERR_CURL_OPERATION_TIMEDOUT = 'LOCERR_CURL_OPERATION_TIMEDOUT',
  LOCERR_CURL_FTP_COULDNT_USE_REST = 'LOCERR_CURL_FTP_COULDNT_USE_REST',
  LOCERR_CURL_HTTP_POST_ERROR = 'LOCERR_CURL_HTTP_POST_ERROR',
  LOCERR_CURL_SSL_CONNECT_ERROR = 'LOCERR_CURL_SSL_CONNECT_ERROR',
  LOCERR_CURL_FILE_COULDNT_READ_FILE = 'LOCERR_CURL_FILE_COULDNT_READ_FILE',
  LOCERR_CURL_LDAP_CANNOT_BIND = 'LOCERR_CURL_LDAP_CANNOT_BIND',
  LOCERR_CURL_LDAP_SEARCH_FAILED = 'LOCERR_CURL_LDAP_SEARCH_FAILED',
  LOCERR_CURL_TOO_MANY_REDIRECTS = 'LOCERR_CURL_TOO_MANY_REDIRECTS',
  LOCERR_CURL_PEER_FAILED_VERIFICATION = 'LOCERR_CURL_PEER_FAILED_VERIFICATION',
  LOCERR_CURL_GOT_NOTHING = 'LOCERR_CURL_GOT_NOTHING',
  LOCERR_CURL_SSL_ENGINE_NOTFOUND = 'LOCERR_CURL_SSL_ENGINE_NOTFOUND',
  LOCERR_CURL_SSL_ENGINE_SETFAILED = 'LOCERR_CURL_SSL_ENGINE_SETFAILED',
  LOCERR_CURL_SSL_CERTPROBLEM = 'LOCERR_CURL_SSL_CERTPROBLEM',
  LOCERR_CURL_SSL_CIPHER = 'LOCERR_CURL_SSL_CIPHER',
  LOCERR_CURL_SSL_CACERT = 'LOCERR_CURL_SSL_CACERT',
  LOCERR_CURL_BAD_CONTENT_ENCODING = 'LOCERR_CURL_BAD_CONTENT_ENCODING',
  LOCERR_CURL_LDAP_INVALID_URL = 'LOCERR_CURL_LDAP_INVALID_URL',
  LOCERR_CURL_USE_SSL_FAILED = 'LOCERR_CURL_USE_SSL_FAILED',
  LOCERR_CURL_SSL_ENGINE_INITFAILED = 'LOCERR_CURL_SSL_ENGINE_INITFAILED',
  LOCERR_CURL_LOGIN_DENIED = 'LOCERR_CURL_LOGIN_DENIED',
  LOCERR_CURL_TFTP_NOTFOUND = 'LOCERR_CURL_TFTP_NOTFOUND',
  LOCERR_CURL_TFTP_ILLEGAL = 'LOCERR_CURL_TFTP_ILLEGAL',
  LOCERR_CURL_SSH = 'LOCERR_CURL_SSH',
  LOCERR_SETEXPRESSION_TOO_LARGE = 'LOCERR_SETEXPRESSION_TOO_LARGE',
}

export const enum NxLocalizedWarningCode {
  LOCWARN_PERSONAL_RELOAD_REQUIRED = 'LOCWARN_PERSONAL_RELOAD_REQUIRED',
  LOCWARN_PERSONAL_VERSION_EXPIRES_SOON = 'LOCWARN_PERSONAL_VERSION_EXPIRES_SOON',
  LOCWARN_EXPORT_DATA_TRUNCATED = 'LOCWARN_EXPORT_DATA_TRUNCATED',
  LOCWARN_COULD_NOT_OPEN_ALL_OBJECTS = 'LOCWARN_COULD_NOT_OPEN_ALL_OBJECTS',
  LOCWARN_SEARCH_INVALID_SEARCHFIELD_DETECTED = 'LOCWARN_SEARCH_INVALID_SEARCHFIELD_DETECTED',
}

export interface FieldValue {
  qText: string;
  qIsNumeric: boolean;
  qNumber: number;
}

export interface NxFieldProperties {
  qOneAndOnlyOne: boolean;
}

export interface AlfaNumString {
  qString: string;
  qIsNum: boolean;
}

export interface NxVariableProperties {
  qName: string;
  qNumberPresentation: FieldAttributes;
  qIncludeInBookmark?: boolean;
  qUsePredefListedValues: boolean;
  qPreDefinedList: string[];
}

export interface FieldAttributes {
  qType?: FieldAttrType;
  qnDec?: number;
  qUseThou?: number;
  qFmt: string;
  qDec: string;
  qThou: string;
}

export const enum FieldAttrType {
  UNKNOWN = 'U',
  ASCII = 'A',
  INTEGER = 'I',
  REAL = 'R',
  FIX = 'F',
  MONEY = 'M',
  DATE = 'D',
  TIME = 'T',
  TIMESTAMP = 'TS',
  INTERVAL = 'IV',
}

export interface GenericObjectLayout {
  qInfo: NxInfo;
  qMeta: NxMeta;
  qExtendsId: string;
  qHasSoftPatches: boolean;
  qError: NxLayoutErrors;
  qSelectionInfo: NxSelectionInfo;
  qStateName: string;
  qAppObjectList?: AppObjectList;
  qBookmarkList?: BookmarkList;
  qChildList?: ChildList;
  qDimensionList?: DimensionList;
  qEmbeddedSnapshot?: EmbeddedSnapshot;
  qExtensionList?: ExtensionList;
  qFieldList?: FieldList;
  qHyperCube?: HyperCube;
  qListObject?: ListObject;
  qMeasureList?: MeasureList;
  qMediaList?: MediaList;
  qNxLibraryDimension?: NxLibraryDimension;
  qNxLibraryMeasure?: NxLibraryMeasure;
  qSelectionObject?: SelectionObject;
  qStaticContentUrl?: StaticContentUrl;
  qTreeData?: TreeData;
  qUndoInfo?: UndoInfo;
  qVariableList?: VariableList;
}

export interface NxInfo {
  qId: string;
  qType: string;
}

export interface NxMeta {
  qName: string;
}

export interface NxLayoutErrors {
  qErrorCode: number;
}

export interface NxSelectionInfo {
  qInSelections: boolean;
  qMadeSelections: boolean;
}

export interface NxPage {
  qLeft: number;
  qTop: number;
  qWidth: number;
  qHeight: number;
}

export interface NxDataPage {
  qMatrix: NxCellRows[];
  qTails: NxGroupTail[];
  qArea: Rect;
  qIsReduced?: boolean;
}

export type NxCellRows = NxCell[];

export interface NxCell {
  qText: string;
  qNum: number;
  qElemNumber: number;
  qState: StateEnumType;
  qIsEmpty: boolean;
  qIsTotalCell: boolean;
  qIsOtherCell: boolean;
  qFrequency: string;
  qHighlightRanges: NxHighlightRanges;
  qAttrExps: NxAttributeExpressionValues;
  qAttrDims: NxAttributeDimValues;
  qIsNull: boolean;
}

export const enum StateEnumType {
  LOCKED = 'L',
  SELECTED = 'S',
  OPTION = 'O',
  DESELECTED = 'D',
  ALTERNATIVE = 'A',
  EXCLUDED = 'X',
  EXCL_SELECTED = 'XS',
  EXCL_LOCKED = 'XL',
  NSTATES = 'NSTATES',
}

export interface NxHighlightRanges {
  qRanges: CharRange[];
}

export interface CharRange {
  qCharPos: number;
  qCharCount: number;
}

export interface NxAttributeExpressionValues {
  qValues: NxSimpleValue[];
}

export interface NxSimpleValue {
  qText: string;
  qNum: number;
}

export interface NxAttributeDimValues {
  qValues: NxSimpleDimValue[];
}

export interface NxSimpleDimValue {
  qText: string;
  qElemNo: number;
}

export interface NxGroupTail {
  qUp: number;
  qDown: number;
}

export interface Rect {
  qLeft: number;
  qTop: number;
  qWidth: number;
  qHeight: number;
}

export const enum NxDataReductionMode {
  DATA_REDUCTION_NONE = 'N',
  DATA_REDUCTION_ONEDIM = 'D1',
  DATA_REDUCTION_SCATTERED = 'S',
  DATA_REDUCTION_CLUSTERED = 'C',
  DATA_REDUCTION_STACKED = 'ST',
}

export interface NxPivotPage {
  qLeft: NxPivotDimensionCell[];
  qTop: NxPivotDimensionCell[];
  qData: ArrayOfNxValuePoint[];
  qArea: Rect;
}

export interface NxPivotDimensionCell {
  qText: string;
  qElemNo: number;
  qValue: number;
  qCanExpand: boolean;
  qCanCollapse: boolean;
  qType: NxDimCellType;
  qUp: number;
  qDown: number;
  qSubNodes: NxPivotDimensionCell[];
  qAttrExps: NxAttributeExpressionValues;
  qAttrDims: NxAttributeDimValues;
}

export const enum NxDimCellType {
  NX_DIM_CELL_VALUE = 'V',
  NX_DIM_CELL_EMPTY = 'E',
  NX_DIM_CELL_NORMAL = 'N',
  NX_DIM_CELL_TOTAL = 'T',
  NX_DIM_CELL_OTHER = 'O',
  NX_DIM_CELL_AGGR = 'A',
  NX_DIM_CELL_PSEUDO = 'P',
  NX_DIM_CELL_ROOT = 'R',
  NX_DIM_CELL_NULL = 'U',
  NX_DIM_CELL_GENERATED = 'G',
}

export type ArrayOfNxValuePoint = NxPivotValuePoint[];

export interface NxPivotValuePoint {
  qLabel: string;
  qText: string;
  qNum: number;
  qType: NxDimCellType;
  qAttrExps: NxAttributeExpressionValues;
  qAttrDims: NxAttributeDimValues;
}

export interface NxStackPage {
  qData: NxStackedPivotCell[];
  qArea: Rect;
}

export interface NxStackedPivotCell {
  qText: string;
  qElemNo: number;
  qValue: number;
  qCanExpand: boolean;
  qCanCollapse: boolean;
  qType: NxDimCellType;
  qMaxPos: number;
  qMinNeg: number;
  qUp: number;
  qDown: number;
  qRow: number;
  qSubNodes: NxStackedPivotCell[];
  qAttrExps: NxAttributeExpressionValues;
  qAttrDims: NxAttributeDimValues;
}

export interface NxContinuousDataOptions {
  qStart: number;
  qEnd: number;
  qNbrPoints: number;
  qMaxNbrTicks: number;
  qMaxNumberLines?: number;
}

export interface NxAxisData {
  qAxis: NxAxisTicks[];
}

export interface NxAxisTicks {
  qName: string;
  qTags: string[];
  qTicks: NxTickCell[];
}

export interface NxTickCell {
  qText: string;
  qStart: number;
  qEnd: number;
}

export interface NxTreeDataOption {
  qMaxNbrOfNodes: number;
  qTreeNodes: NxPageTreeNode[];
  qTreeLevels: NxPageTreeLevel;
}

export interface NxPageTreeNode {
  qArea: Rect;
  qAllValues: boolean;
}

export interface NxPageTreeLevel {
  qLeft: number;
  qDepth?: number;
}

export interface NxTreeNode {
  qText: string;
  qValue: number;
  qElemNo: number;
  qGroupPos: number;
  qGroupSize: number;
  qRow: number;
  qType: NxDimCellType;
  qValues: NxTreeValue[];
  qNodes: NxTreeNode[];
  qAttrExps: NxAttributeExpressionValues;
  qAttrDims: NxAttributeDimValues;
  qMaxPos: number[];
  qMinNeg: number[];
  qCanExpand: boolean;
  qCanCollapse: boolean;
  qState: StateEnumType;
  qTreePath: number[];
}

export interface NxTreeValue {
  qText: string;
  qValue: number;
  qAttrExps: NxAttributeExpressionValues;
  qAttrDims: NxAttributeDimValues;
}

export interface NxViewPort {
  qWidth: number;
  qHeight: number;
  qZoomLevel: number;
}

export interface NxDataAreaPage {
  qLeft: number;
  qTop: number;
  qWidth: number;
  qHeight: number;
}

export interface NxPatch {
  qOp: NxPatchOperationType;
  qPath: string;
  qValue: string;
}

export const enum NxPatchOperationType {
  Add = 'add',
  Remove = 'remove',
  Replace = 'replace',
}

export interface GenericObjectProperties {
  qInfo: NxInfo;
  qExtendsId: string;
  qMetaDef: NxMetaDef;
  qStateName: string;
  qAppObjectListDef?: AppObjectListDef;
  qBookmarkListDef?: BookmarkListDef;
  qChildListDef?: ChildListDef;
  qDimensionListDef?: DimensionListDef;
  qEmbeddedSnapshotDef?: EmbeddedSnapshotDef;
  qExtensionListDef?: ExtensionListDef;
  qFieldListDef?: FieldListDef;
  qHyperCubeDef?: HyperCubeDef;
  qLayoutExclude?: LayoutExclude;
  qListObjectDef?: ListObjectDef;
  qMeasureListDef?: MeasureListDef;
  qMediaListDef?: MediaListDef;
  qNxLibraryDimensionDef?: NxLibraryDimensionDef;
  qNxLibraryMeasureDef?: NxLibraryMeasureDef;
  qSelectionObjectDef?: SelectionObjectDef;
  qStaticContentUrlDef?: StaticContentUrlDef;
  qStringExpression?: StringExpression;
  qTreeDataDef?: TreeDataDef;
  qUndoInfoDef?: UndoInfoDef;
  qValueExpression?: ValueExpression;
  qVariableListDef?: VariableListDef;
}

export interface NxMetaDef {}

export interface GenericObjectEntry {
  qProperty: GenericObjectProperties;
  qChildren: GenericObjectEntry[];
  qEmbeddedSnapshotRef: GenericBookmarkEntry;
}

export interface GenericBookmarkEntry {
  qProperties: GenericBookmarkProperties;
  qBookmark: NxBookmark;
}

export interface GenericBookmarkProperties {
  qInfo: NxInfo;
  qMetaDef: NxMetaDef;
}

export interface NxBookmark {
  qStateData: AlternateStateData[];
  qUtcModifyTime: number;
  qVariableItems: BookmarkVariableItem[];
  qPatches: NxPatches[];
}

export interface AlternateStateData {
  qStateName: string;
  qFieldItems: BookmarkFieldItem[];
}

export interface BookmarkFieldItem {
  qDef: FieldDefEx;
  qLocked: boolean;
  qSelectInfo: SelectInfo;
  qValues: FieldValue[];
  qExcludedValues: FieldValue[];
  qAndMode: boolean;
  qOneAndOnlyOne: boolean;
}

export interface FieldDefEx {
  qName: string;
  qType: FieldType;
}

export const enum FieldType {
  NOT_PRESENT = 'NOT_PRESENT',
  PRESENT = 'PRESENT',
  IS_CYCLIC_GROUP = 'IS_CYCLIC_GROUP',
  IS_DRILL_GROUP = 'IS_DRILL_GROUP',
  IS_VAR = 'IS_VAR',
  IS_EXPR = 'IS_EXPR',
  IS_IMPLICIT = 'IS_IMPLICIT',
  IS_DETAIL = 'IS_DETAIL',
}

export interface SelectInfo {
  qTextSearch: string;
  qRangeLo?: number;
  qRangeHi?: number;
  qNumberFormat: FieldAttributes;
  qRangeInfo: RangeSelectInfo[];
  qSoftLock?: boolean;
  qContinuousRangeInfo: Range[];
  qSelectFieldSearch?: boolean;
}

export interface RangeSelectInfo {
  qRangeLo?: number;
  qRangeHi?: number;
  qMeasure: string;
}

export interface Range {
  qMin: number;
  qMax: number;
  qMinInclEq: boolean;
  qMaxInclEq: boolean;
}

export interface BookmarkVariableItem {
  qName: string;
  qValue: FieldValue;
}

export interface NxPatches {
  qInfo: NxInfo;
  qPatches: NxPatch[];
  qChildren: NxPatches[];
}

export const enum NxExportFileType {
  EXPORT_CSV_C = 'CSV_C',
  EXPORT_CSV_T = 'CSV_T',
  EXPORT_OOXML = 'OOXML',
}

export const enum NxExportState {
  EXPORT_POSSIBLE = 'P',
  EXPORT_ALL = 'A',
}

export interface NxSelectionCell {
  qType: NxSelectionCellType;
  qCol: number;
  qRow: number;
}

export const enum NxSelectionCellType {
  NX_CELL_DATA = 'D',
  NX_CELL_TOP = 'T',
  NX_CELL_LEFT = 'L',
}

export interface NxRangeSelectInfo {
  qRange: Range;
  qMeasureIx: number;
}

export interface NxMultiRangeSelectInfo {
  qRanges: NxRangeSelectInfo[];
  qColumnsToSelect: number[];
}

export interface NxTreeMultiRangeSelectInfo {
  qRanges: NxTreeRangeSelectInfo[];
}

export interface NxTreeRangeSelectInfo {
  qRange: Range;
  qMeasureIx: number;
  qDimensionIx: number;
}

export interface NxContinuousRangeSelectInfo {
  qRange: Range;
  qDimIx: number;
}

export interface ObjectInterface {
  qType: string;
  qHandle: number;
  qGenericType: string;
  qGenericId: string;
}

export interface NxLinkedObjectInfo {
  qRootId: string;
  qInfo: NxInfo;
}

export interface AppObjectListDef {
  qType: string;
  qData: JsonObject;
}

export interface JsonObject {}

export interface AppObjectList {
  qItems: NxContainerEntry[];
}

export interface NxContainerEntry {
  qInfo: NxInfo;
  qMeta: NxMeta;
  qData: JsonObject;
}

export interface BookmarkListDef {
  qType: string;
  qData: JsonObject;
}

export interface BookmarkList {
  qItems: NxContainerEntry[];
}

export interface ChildListDef {
  qData: JsonObject;
}

export interface ChildList {
  qItems: NxContainerEntry[];
}

export interface DimensionListDef {
  qType: string;
  qData: JsonObject;
}

export interface DimensionList {
  qItems: NxContainerEntry[];
}

export interface EmbeddedSnapshotDef {}

export interface EmbeddedSnapshot {}

export interface ExtensionListDef {}

export interface ExtensionList {
  qItems: string[];
}

export interface FieldListDef {
  qShowSystem?: boolean;
  qShowHidden?: boolean;
  qShowSemantic?: boolean;
  qShowSrcTables?: boolean;
  qShowDefinitionOnly?: boolean;
  qShowDerivedFields?: boolean;
  qShowImplicit?: boolean;
}

export interface FieldList {
  qItems: NxFieldDescription[];
}

export interface NxFieldDescription {
  qIsSemantic: boolean;
  qIsHidden: boolean;
  qIsSystem: boolean;
  qAndMode: boolean;
  qName: string;
  qCardinal: number;
  qTags: string[];
  qIsDefinitionOnly: boolean;
  qDerivedFieldData: NxDerivedFieldDescriptionList;
  qIsDetail: boolean;
  qIsImplicit: boolean;
  qReadableName: string;
}

export interface NxDerivedFieldDescriptionList {
  qDerivedFieldLists: NxDerivedFieldsData[];
}

export interface NxDerivedFieldsData {
  qDerivedDefinitionName: string;
  qFieldDefs: NxDerivedField[];
  qGroupDefs: NxDerivedGroup[];
  qTags: string[];
}

export interface NxDerivedField {
  qId: string;
  qName: string;
  qMethod: string;
  qExpr: string;
  qTags: string[];
}

export interface NxDerivedGroup {
  qId: string;
  qName: string;
  qGrouping: NxGrpType;
  qFieldDefs: string[];
}

export const enum NxGrpType {
  GRP_NX_NONE = 'N',
  GRP_NX_HIEARCHY = 'H',
  GRP_NX_COLLECTION = 'C',
}

export interface HyperCubeDef {
  qStateName: string;
  qDimensions: NxDimension[];
  qMeasures: NxMeasure[];
  qInterColumnSortOrder: number[];
  qSuppressZero?: boolean;
  qSuppressMissing?: boolean;
  qInitialDataFetch: NxPage[];
  qReductionMode: NxDataReductionMode;
  qMode?: NxHypercubeMode;
  qPseudoDimPos?: number;
  qNoOfLeftDims?: number;
  qAlwaysFullyExpanded?: boolean;
  qMaxStackedCells?: number;
  qPopulateMissing?: boolean;
  qShowTotalsAbove?: boolean;
  qIndentMode?: boolean;
  qCalcCond: ValueExpr;
  qSortbyYValue?: number;
  qTitle: StringExpr;
  qCalcCondition: NxCalcCond;
  qColumnOrder: number[];
  qExpansionState: ExpansionData[];
}

export interface NxDimension {
  qLibraryId: string;
  qDef: NxInlineDimensionDef;
  qNullSuppression: boolean;
  qIncludeElemValue: boolean;
  qOtherTotalSpec: OtherTotalSpecProp;
  qShowTotal: boolean;
  qShowAll: boolean;
  qOtherLabel: StringExpr;
  qTotalLabel: StringExpr;
  qCalcCond: ValueExpr;
  qAttributeExpressions: NxAttrExprDef[];
  qAttributeDimensions: NxAttrDimDef[];
  qCalcCondition: NxCalcCond;
}

export interface NxInlineDimensionDef {
  qGrouping: NxGrpType;
  qFieldDefs: string[];
  qFieldLabels: string[];
  qSortCriterias: SortCriteria[];
  qNumberPresentations: FieldAttributes[];
  qReverseSort: boolean;
  qActiveField: number;
  qLabelExpression: string;
}

export interface SortCriteria {
  qSortByState: number;
  qSortByFrequency: number;
  qSortByNumeric: number;
  qSortByAscii: number;
  qSortByLoadOrder: number;
  qSortByExpression: number;
  qExpression: ValueExpr;
  qSortByGreyness: number;
}

export interface ValueExpr {
  qv: string;
}

export interface OtherTotalSpecProp {
  qOtherMode?: OtherMode;
  qOtherCounted: ValueExpr;
  qOtherLimit: ValueExpr;
  qOtherLimitMode?: OtherLimitMode;
  qSuppressOther?: boolean;
  qForceBadValueKeeping?: boolean;
  qApplyEvenWhenPossiblyWrongResult?: boolean;
  qGlobalOtherGrouping?: boolean;
  qOtherCollapseInnerDimensions?: boolean;
  qOtherSortMode?: OtherSortMode;
  qTotalMode?: TotalMode;
  qReferencedExpression: StringExpr;
}

export const enum OtherMode {
  OTHER_OFF = 'OTHER_OFF',
  OTHER_COUNTED = 'OTHER_COUNTED',
  OTHER_ABS_LIMITED = 'OTHER_ABS_LIMITED',
  OTHER_ABS_ACC_TARGET = 'OTHER_ABS_ACC_TARGET',
  OTHER_REL_LIMITED = 'OTHER_REL_LIMITED',
  OTHER_REL_ACC_TARGET = 'OTHER_REL_ACC_TARGET',
}

export const enum OtherLimitMode {
  OTHER_GE_LIMIT = 'OTHER_GE_LIMIT',
  OTHER_LE_LIMIT = 'OTHER_LE_LIMIT',
  OTHER_GT_LIMIT = 'OTHER_GT_LIMIT',
  OTHER_LT_LIMIT = 'OTHER_LT_LIMIT',
}

export const enum OtherSortMode {
  OTHER_SORT_DEFAULT = 'OTHER_SORT_DEFAULT',
  OTHER_SORT_DESCENDING = 'OTHER_SORT_DESCENDING',
  OTHER_SORT_ASCENDING = 'OTHER_SORT_ASCENDING',
}

export const enum TotalMode {
  TOTAL_OFF = 'TOTAL_OFF',
  TOTAL_EXPR = 'TOTAL_EXPR',
}

export interface StringExpr {
  qv: string;
}

export interface NxAttrExprDef {
  qExpression: string;
  qLibraryId: string;
  qAttribute: boolean;
  qNumFormat: FieldAttributes;
}

export interface NxAttrDimDef {
  qDef: string;
  qLibraryId: string;
  qSortBy: SortCriteria;
  qAttribute: boolean;
}

export interface NxCalcCond {
  qCond: ValueExpr;
  qMsg: StringExpr;
}

export interface NxMeasure {
  qLibraryId: string;
  qDef: NxInlineMeasureDef;
  qSortBy: SortCriteria;
  qAttributeExpressions: NxAttrExprDef[];
  qAttributeDimensions: NxAttrDimDef[];
  qCalcCond: ValueExpr;
  qCalcCondition: NxCalcCond;
  qTrendLines: NxTrendlineDef[];
}

export interface NxInlineMeasureDef {
  qLabel: string;
  qDescription: string;
  qTags: string[];
  qGrouping: NxGrpType;
  qDef: string;
  qNumFormat: FieldAttributes;
  qRelative: boolean;
  qBrutalSum: boolean;
  qAggrFunc: string;
  qAccumulate: number;
  qReverseSort: boolean;
  qActiveExpression: number;
  qExpressions: string[];
  qLabelExpression: string;
}

export interface NxTrendlineDef {
  qType: NxLTrendlineType;
  qXColIx?: number;
  qCalcR2?: boolean;
  qContinuousXAxis?: NxContinuousMode;
  qMultiDimMode?: NxTrendlineMode;
}

export const enum NxLTrendlineType {
  Average = 'AVERAGE',
  Linear = 'LINEAR',
  Polynomial2 = 'POLYNOMIAL2',
  Polynomial3 = 'POLYNOMIAL3',
  Polynomial4 = 'POLYNOMIAL4',
  Exponential = 'EXPONENTIAL',
  Power = 'POWER',
  Logarithmic = 'LOG',
}

export const enum NxContinuousMode {
  CONTINUOUS_NEVER = 'Never',
  CONTINUOUS_IF_POSSIBLE = 'Possible',
  CONTINUOUS_IF_TIME = 'Time',
}

export const enum NxTrendlineMode {
  TRENDLINE_MULTILINE = 'Multi',
  TRENDLINE_SUM = 'Sum',
}

export const enum NxHypercubeMode {
  DATA_MODE_STRAIGHT = 'S',
  DATA_MODE_PIVOT = 'P',
  DATA_MODE_PIVOT_STACK = 'K',
  DATA_MODE_TREE = 'T',
}

export interface ExpansionData {
  qExcludeList: boolean;
  qPos: PositionMark;
}

export interface PositionMark {
  qDimName: string;
  qElemNo: number[];
  qElemValues: Blob[];
}

export interface HyperCube {
  qStateName: string;
  qSize: Size;
  qError: NxValidationError;
  qDimensionInfo: NxDimensionInfo[];
  qMeasureInfo: NxMeasureInfo[];
  qEffectiveInterColumnSortOrder: number[];
  qGrandTotalRow: NxCell[];
  qDataPages: NxDataPage[];
  qPivotDataPages: NxPivotPage[];
  qStackedDataPages: NxStackPage[];
  qMode: NxHypercubeMode;
  qNoOfLeftDims: number;
  qIndentMode: boolean;
  qLastExpandedPos: NxCellPosition;
  qHasOtherValues: boolean;
  qTitle: string;
  qTreeNodesOnDim: number[];
  qCalcCondMsg: string;
  qColumnOrder: number[];
}

export interface Size {
  qcx: number;
  qcy: number;
}

export interface NxValidationError {
  qErrorCode: number;
  qContext: string;
  qExtendedMessage: string;
}

export interface NxDimensionInfo {
  qFallbackTitle: string;
  qApprMaxGlyphCount: number;
  qCardinal: number;
  qLocked: boolean;
  qSortIndicator: NxSortIndicatorType;
  qGroupFallbackTitles: string[];
  qGroupPos: number;
  qStateCounts: NxStateCounts;
  qTags: string[];
  qError: NxValidationError;
  qDimensionType: NxDimensionType;
  qReverseSort: boolean;
  qGrouping: NxGrpType;
  qIsSemantic: boolean;
  qNumFormat: FieldAttributes;
  qIsAutoFormat: boolean;
  qGroupFieldDefs: string[];
  qMin: number;
  qMax: number;
  qContinuousAxes: boolean;
  qIsCyclic: boolean;
  qDerivedField: boolean;
  qAttrExprInfo: NxAttrExprInfo[];
  qAttrDimInfo: NxAttrDimInfo[];
  qCalcCondMsg: string;
  qIsCalculated?: boolean;
  qIsOneAndOnlyOne: boolean;
  qCardinalities: NxCardinalities;
  qLibraryId: string;
}

export const enum NxSortIndicatorType {
  NX_SORT_INDICATE_NONE = 'N',
  NX_SORT_INDICATE_ASC = 'A',
  NX_SORT_INDICATE_DESC = 'D',
}

export interface NxStateCounts {
  qLocked: number;
  qSelected: number;
  qOption: number;
  qDeselected: number;
  qAlternative: number;
  qExcluded: number;
  qSelectedExcluded: number;
  qLockedExcluded: number;
}

export const enum NxDimensionType {
  NX_DIMENSION_TYPE_DISCRETE = 'D',
  NX_DIMENSION_TYPE_NUMERIC = 'N',
  NX_DIMENSION_TYPE_TIME = 'T',
}

export interface NxAttrExprInfo {
  qMin: number;
  qMax: number;
  qFallbackTitle: string;
  qMinText: string;
  qMaxText: string;
  qNumFormat: FieldAttributes;
  qIsAutoFormat: boolean;
}

export interface NxAttrDimInfo {
  qCardinal: number;
  qSize: Size;
  qFallbackTitle: string;
  qLocked: boolean;
  qError: NxValidationError;
  qIsCalculated?: boolean;
}

export interface NxCardinalities {
  qCardinal: number;
  qHypercubeCardinal: number;
  qAllValuesCardinal?: number;
}

export interface NxMeasureInfo {
  qFallbackTitle: string;
  qApprMaxGlyphCount: number;
  qCardinal: number;
  qSortIndicator: NxSortIndicatorType;
  qNumFormat: FieldAttributes;
  qMin: number;
  qMax: number;
  qError: NxValidationError;
  qReverseSort: boolean;
  qIsAutoFormat: boolean;
  qAttrExprInfo: NxAttrExprInfo[];
  qAttrDimInfo: NxAttrDimInfo[];
  qCalcCondMsg: string;
  qLibraryId: string;
  qTrendLines: NxTrendline[];
}

export interface NxTrendline {
  qType: NxLTrendlineType;
  qError: NxValidationError;
  qCoeff: number[];
  qR2: number;
  qExpression: string;
  qElemNo: number;
}

export interface NxCellPosition {
  qx: number;
  qy: number;
}

export interface LayoutExclude {}

export interface ListObjectDef {
  qStateName: string;
  qLibraryId: string;
  qDef: NxInlineDimensionDef;
  qAutoSortByState: NxAutoSortByStateDef;
  qFrequencyMode?: NxFrequencyMode;
  qShowAlternatives: boolean;
  qInitialDataFetch: NxPage[];
  qExpressions: NxListObjectExpressionDef[];
}

export interface NxAutoSortByStateDef {
  qDisplayNumberOfRows: number;
}

export const enum NxFrequencyMode {
  NX_FREQUENCY_NONE = 'N',
  NX_FREQUENCY_VALUE = 'V',
  NX_FREQUENCY_PERCENT = 'P',
  NX_FREQUENCY_RELATIVE = 'R',
}

export interface NxListObjectExpressionDef {
  qExpr: string;
  qLibraryId: string;
}

export interface ListObject {
  qStateName: string;
  qSize: Size;
  qError: NxValidationError;
  qDimensionInfo: NxDimensionInfo;
  qExpressions: NxListObjectExpression[];
  qDataPages: NxDataPage[];
}

export interface NxListObjectExpression {
  qExpr: string;
  qError: NxLayoutErrors;
}

export interface MeasureListDef {
  qType: string;
  qData: JsonObject;
}

export interface MeasureList {
  qItems: NxContainerEntry[];
}

export interface MediaListDef {}

export interface MediaList {
  qItems: MediaListItem[];
}

export interface MediaListItem {
  qUrlDef: string;
  qUrl: string;
}

export interface NxLibraryDimensionDef {
  qGrouping: NxGrpType;
  qFieldDefs: string[];
  qFieldLabels: string[];
  qLabelExpression: string;
}

export interface NxLibraryDimension {
  qGrouping: NxGrpType;
  qFieldDefs: string[];
  qFieldLabels: string[];
  qLabelExpression: string;
}

export interface NxLibraryMeasureDef {
  qLabel: string;
  qDef: string;
  qGrouping: NxGrpType;
  qExpressions: string[];
  qActiveExpression: number;
  qLabelExpression: string;
}

export interface NxLibraryMeasure {
  qLabel: string;
  qDef: string;
  qGrouping: NxGrpType;
  qExpressions: string[];
  qActiveExpression: number;
  qLabelExpression: string;
}

export interface SelectionObjectDef {
  qStateName: string;
}

export interface SelectionObject {
  qBackCount: number;
  qForwardCount: number;
  qSelections: NxCurrentSelectionItem[];
  qStateName: string;
}

export interface NxCurrentSelectionItem {
  qTotal: number;
  qIsNum: boolean;
  qField: string;
  qLocked: boolean;
  qOneAndOnlyOne: boolean;
  qTextSearch: string;
  qSelectedCount: number;
  qSelected: string;
  qRangeInfo: RangeSelectInfo[];
  qSortIndex: number;
  qStateCounts: NxStateCounts;
  qSelectedFieldSelectionInfo: NxFieldSelectionInfo[];
  qNotSelectedFieldSelectionInfo: NxFieldSelectionInfo[];
  qSelectionThreshold: number;
  qReadableName: string;
  qIsHidden: boolean;
}

export interface NxFieldSelectionInfo {
  qName: string;
  qFieldSelectionMode: NxFieldSelectionMode;
}

export const enum NxFieldSelectionMode {
  SELECTION_MODE_NORMAL = 'NORMAL',
  SELECTION_MODE_AND = 'AND',
  SELECTION_MODE_NOT = 'NOT',
}

export interface StaticContentUrlDef {
  qUrl: string;
}

export interface StaticContentUrl {
  qUrl: string;
}

export interface StringExpression {
  qExpr: string;
}

export interface TreeDataDef {
  qStateName: string;
  qDimensions: NxTreeDimensionDef[];
  qInterColumnSortOrder: number[];
  qSuppressZero?: boolean;
  qSuppressMissing?: boolean;
  qOpenFullyExpanded?: boolean;
  qPopulateMissing?: boolean;
  qCalcCondition: NxCalcCond;
  qTitle: StringExpr;
  qInitialDataFetch: NxTreeDataOption[];
  qExpansionState: ExpansionData[];
}

export interface NxTreeDimensionDef {
  qLibraryId: string;
  qDef: NxInlineDimensionDef;
  qValueExprs: NxMeasure[];
  qNullSuppression: boolean;
  qOtherTotalSpec: OtherTotalSpecProp;
  qShowAll: boolean;
  qOtherLabel: StringExpr;
  qTotalLabel: StringExpr;
  qCalcCondition: NxCalcCond;
  qAttributeExpressions: NxAttrExprDef[];
  qAttributeDimensions: NxAttrDimDef[];
}

export interface TreeData {
  qStateName: string;
  qNodesOnDim: number[];
  qError: NxValidationError;
  qDimensionInfo: NxTreeDimensionInfo[];
  qEffectiveInterColumnSortOrder: number[];
  qHasOtherValues: boolean;
  qTitle: string;
  qLastExpandedPos: NxCellPosition;
  qCalcCondMsg: string;
  qTreeDataPages: NxTreeNode[];
}

export interface NxTreeDimensionInfo {
  qFallbackTitle: string;
  qApprMaxGlyphCount: number;
  qCardinal: number;
  qLocked: boolean;
  qSortIndicator: NxSortIndicatorType;
  qGroupFallbackTitles: string[];
  qGroupPos: number;
  qStateCounts: NxStateCounts;
  qTags: string[];
  qError: NxValidationError;
  qDimensionType: NxDimensionType;
  qReverseSort: boolean;
  qGrouping: NxGrpType;
  qIsSemantic: boolean;
  qNumFormat: FieldAttributes;
  qIsAutoFormat: boolean;
  qGroupFieldDefs: string[];
  qMin: number;
  qMax: number;
  qContinuousAxes: boolean;
  qIsCyclic: boolean;
  qDerivedField: boolean;
  qMeasureInfo: NxMeasureInfo[];
  qAttrExprInfo: NxAttrExprInfo[];
  qAttrDimInfo: NxAttrDimInfo[];
  qCalcCondMsg: string;
  qIsCalculated?: boolean;
  qIsOneAndOnlyOne: boolean;
  qCardinalities: NxCardinalities;
  qLibraryId: string;
}

export interface UndoInfoDef {}

export interface UndoInfo {
  qUndoCount: number;
  qRedoCount: number;
}

export interface ValueExpression {
  qExpr: string;
}

export interface VariableListDef {
  qType: string;
  qShowReserved: boolean;
  qShowConfig: boolean;
  qData: JsonObject;
  qShowSession: boolean;
}

export interface VariableList {
  qItems: NxVariableListItem[];
}

export interface NxVariableListItem {
  qName: string;
  qDescription: string;
  qDefinition: string;
  qIsConfig?: boolean;
  qIsReserved?: boolean;
  qMeta: NxMeta;
  qInfo: NxInfo;
  qData: JsonObject;
  qIsScriptCreated: boolean;
}

export interface GenericDimensionLayout {
  qInfo: NxInfo;
  qMeta: NxMeta;
  qDim: NxLibraryDimension;
  qDimInfos: GenericDimensionInfo[];
}

export interface GenericDimensionInfo {
  qApprMaxGlyphCount: number;
  qCardinal: number;
  qTags: string[];
  qIsSemantic: boolean;
  qAndMode: boolean;
}

export interface GenericDimensionProperties {
  qInfo: NxInfo;
  qDim: NxLibraryDimensionDef;
  qMetaDef: NxMetaDef;
}

export interface BookmarkFieldPage {
  qStartIndex: number;
  qEndIndex: number;
}

export interface GenericBookmarkLayout {
  qInfo: NxInfo;
  qMeta: NxMeta;
  qBookmark: NxBookmark;
  qFieldInfos: LayoutFieldInfo[];
}

export interface LayoutFieldInfo {
  qFieldName: string;
  qValuesCount: number;
  qExcludedValuesCount: number;
}

export interface GenericVariableLayout {
  qInfo: NxInfo;
  qMeta: NxMeta;
  qText: string;
  qNum: number;
  qIsScriptCreated: boolean;
}

export interface GenericVariableProperties {
  qInfo: NxInfo;
  qMetaDef: NxMetaDef;
  qName: string;
  qComment: string;
  qNumberPresentation: FieldAttributes;
  qIncludeInBookmark?: boolean;
  qDefinition: string;
}

export interface GenericMeasureLayout {
  qInfo: NxInfo;
  qMeasure: NxLibraryMeasure;
  qMeta: NxMeta;
}

export interface GenericMeasureProperties {
  qInfo: NxInfo;
  qMeasure: NxLibraryMeasureDef;
  qMetaDef: NxMetaDef;
}

export interface FieldDescription {
  qInternalNumber: number;
  qName: string;
  qSrcTables: string[];
  qIsSystem: boolean;
  qIsHidden: boolean;
  qIsSemantic: boolean;
  qDistinctOnly: boolean;
  qCardinal: number;
  qTotalCount: number;
  qPossibleCount_OBSOLETE: number;
  qHasInfo_OBSOLETE: boolean;
  qIsLocked: boolean;
  qAlwaysOneSelected: boolean;
  qAndMode: boolean;
  qIsNumeric: boolean;
  qComment: string;
  qTags: string[];
  qIsDefinitionOnly: boolean;
  qByteSize: number;
}

export interface LocaleInfo {
  qDecimalSep: string;
  qThousandSep: string;
  qListSep: string;
  qMoneyDecimalSep: string;
  qMoneyThousandSep: string;
  qCurrentYear: number;
  qMoneyFmt: string;
  qTimeFmt: string;
  qDateFmt: string;
  qTimestampFmt: string;
  qCalendarStrings: CalendarStrings;
  qFirstWeekDay: number;
  qBrokenWeeks: boolean;
  qReferenceDay: number;
  qFirstMonthOfYear: number;
  qCollation: string;
  qNumericalAbbreviation: string;
}

export interface CalendarStrings {
  qDayNames: string[];
  qMonthNames: string[];
  qLongDayNames: string[];
  qLongMonthNames: string[];
}

export interface TableRecord {
  qName: string;
  qLoose: boolean;
  qNoOfRows: number;
  qFields: FieldInTableData[];
  qPos: Point;
  qComment: string;
  qIsDirectDiscovery: boolean;
  qIsSynthetic: boolean;
}

export interface FieldInTableData {
  qName: string;
  qOriginalFields: string[];
  qPresent: boolean;
  qHasNull: boolean;
  qHasWild: boolean;
  qHasDuplicates: boolean;
  qIsSynthetic: boolean;
  qInformationDensity: number;
  qnNonNulls: number;
  qnRows: number;
  qSubsetRatio: number;
  qnTotalDistinctValues: number;
  qnPresentDistinctValues: number;
  qKeyType: KeyType;
  qComment: string;
  qTags: string[];
  qDerivedFields: DerivedFieldsInTableData[];
  qIsFieldOnTheFly?: boolean;
  qReadableName: string;
}

export const enum KeyType {
  NOT_KEY = 'NOT_KEY',
  ANY_KEY = 'ANY_KEY',
  PRIMARY_KEY = 'PRIMARY_KEY',
  PERFECT_KEY = 'PERFECT_KEY',
}

export interface DerivedFieldsInTableData {
  qDefinitionName: string;
  qTags: string[];
  qActive: boolean;
}

export interface Point {
  qx: number;
  qy: number;
}

export interface SourceKeyRecord {
  qKeyFields: string[];
  qTables: string[];
}

export interface TableViewDlgSaveInfo {
  qPos: Rect;
  qCtlInfo: TableViewCtlSaveInfo;
  qMode: number;
}

export interface TableViewCtlSaveInfo {
  qInternalView: TableViewSaveInfo;
  qSourceView: TableViewSaveInfo;
}

export interface TableViewSaveInfo {
  qTables: TableViewTableWinSaveInfo[];
  qBroomPoints: TableViewBroomPointSaveInfo[];
  qConnectionPoints: TableViewConnectionPointSaveInfo[];
  qZoomFactor?: number;
}

export interface TableViewTableWinSaveInfo {
  qPos: Rect;
  qCaption: string;
}

export interface TableViewBroomPointSaveInfo {
  qPos: Point;
  qTable: string;
  qFields: string[];
}

export interface TableViewConnectionPointSaveInfo {
  qPos: Point;
  qFields: string[];
}

export interface EditorBreakpoint {
  qbufferName: string;
  qlineIx: number;
  qEnabled: boolean;
}

export interface TextMacro {
  qTag: string;
  qRefSeqNo: number;
  qSetSeqNo: number;
  qDisplayString: string;
  qIsSystem?: boolean;
  qIsReserved?: boolean;
}

export interface TableRow {
  qValue: FieldValue[];
}

export interface NxAppLayout {
  qTitle: string;
  qFileName: string;
  qLastReloadTime: string;
  qModified: boolean;
  qHasScript: boolean;
  qStateNames: string[];
  qMeta: NxMeta;
  qLocaleInfo: LocaleInfo;
  qHasData: boolean;
  qReadOnly: boolean;
  qIsOpenedWithoutData: boolean;
  qIsSessionApp: boolean;
  qThumbnail: StaticContentUrl;
  qIsBDILiveMode: boolean;
}

export interface NxAppProperties {
  qTitle: string;
  qLastReloadTime: string;
  qMigrationHash: string;
  qSavedInProductVersion: string;
  qThumbnail: StaticContentUrlDef;
  qHasSectionAccess: boolean;
}

export interface LineageInfo {
  qDiscriminator: string;
  qStatement: string;
}

export interface NxGetObjectOptions {
  qTypes: string[];
  qIncludeSessionObjects?: boolean;
  qData: JsonObject;
}

export interface NxGetBookmarkOptions {
  qTypes: string[];
  qData: JsonObject;
}

export interface NxRange {
  qFrom: number;
  qCount: number;
}

export interface NxMatchingFieldInfo {
  qName: string;
  qTags: string[];
}

export const enum NxMatchingFieldMode {
  MATCHINGFIELDMODE_MATCH_ALL = 'MATCHINGFIELDMODE_MATCH_ALL',
  MATCHINGFIELDMODE_MATCH_ONE = 'MATCHINGFIELDMODE_MATCH_ONE',
}

export interface AssociationScore {
  qFieldPairName: string;
  qScoreSummary: number;
  qField1Scores: FieldScores;
  qField2Scores: FieldScores;
}

export interface FieldScores {
  qFieldName: string;
  qReadableName: string;
  qCardinalRatio: number;
  qSymbolScore: number;
  qRowScore: number;
}

export interface ContentLibraryList {
  qItems: ContentLibraryListItem[];
}

export interface ContentLibraryListItem {
  qName: string;
  qAppSpecific: boolean;
  qMeta: NxMeta;
}

export interface StaticContentList {
  qItems: StaticContentListItem[];
}

export interface StaticContentListItem {
  qUrlDef: string;
  qUrl: string;
}

export interface DoReloadExResult {
  qSuccess: boolean;
  qScriptLogFile: string;
}

export interface DoReloadExParams {
  qMode?: number;
  qPartial?: boolean;
  qDebug?: boolean;
  qReloadId: string;
}

export interface NxDownloadInfo {
  qUrl: string;
  qFileSize?: number;
}

export interface NxDownloadOptions {
  qBookmarkId: string;
  qExpires?: number;
}

export interface ScriptSyntaxError {
  qErrLen?: number;
  qTabIx?: number;
  qLineInTab?: number;
  qColInLine?: number;
  qTextPos?: number;
  qSecondaryFailure: boolean;
}

export interface Connection {
  qId: string;
  qName: string;
  qConnectionString: string;
  qType: string;
  qUserName: string;
  qPassword: string;
  qModifiedDate: string;
  qMeta: NxMeta;
  qLogOn: LogOnType;
}

export const enum LogOnType {
  LOG_ON_SERVICE_USER = 'LOG_ON_SERVICE_USER',
  LOG_ON_CURRENT_USER = 'LOG_ON_CURRENT_USER',
}

export interface DatabaseInfo {
  qDBMSName: string;
  qDBUsage: boolean;
  qOwnerUsage: boolean;
  qDBSeparator: string;
  qOwnerSeparator: string;
  qDBFirst: boolean;
  qQuotePreffix: string;
  qQuoteSuffix: string;
  qSpecialChars: string;
  qDefaultDatabase: string;
  qKeywords: string[];
}

export interface Database {
  qName: string;
  qIsDefault: boolean;
}

export interface DatabaseOwner {
  qName: string;
}

export interface DataTable {
  qName: string;
  qType: string;
}

export interface DataField {
  qName: string;
  qIsKey?: boolean;
  qOriginalFieldName: string;
}

export interface DataRecord {
  qValues: string[];
}

export interface FilterInfo {
  qType: FilterType;
  qWherePredicate: string;
}

export const enum FilterType {
  FILTER_TYPE_NONE = 'NONE',
  FILTER_TYPE_RAW = 'RAW',
}

export interface FolderItem {
  qName: string;
  qType: FolderItemType;
}

export const enum FolderItemType {
  FOLDER_ITEM_FOLDER = 'FOLDER',
  FOLDER_ITEM_FILE = 'FILE',
  FOLDER_ITEM_OTHER = 'OTHER',
}

export interface FileDataFormat {
  qType: FileType;
  qLabel: string;
  qQuote: string;
  qComment: string;
  qDelimiter: DelimiterInfo;
  qCodePage: number;
  qHeaderSize: number;
  qRecordSize: number;
  qTabSize: number;
  qIgnoreEOF: boolean;
  qFixedWidthDelimiters: string;
}

export const enum FileType {
  FILE_TYPE_CSV = 'CSV',
  FILE_TYPE_FIX = 'FIX',
  FILE_TYPE_DIF = 'DIF',
  FILE_TYPE_EXCEL_BIFF = 'EXCEL_BIFF',
  FILE_TYPE_EXCEL_OOXML = 'EXCEL_OOXML',
  FILE_TYPE_HTML = 'HTML',
  FILE_TYPE_QVD = 'QVD',
  FILE_TYPE_XML = 'XML',
  FILE_TYPE_QVX = 'QVX',
  FILE_TYPE_JSON = 'JSON',
  FILE_TYPE_KML = 'KML',
}

export interface DelimiterInfo {
  qName: string;
  qScriptCode: string;
  qNumber: number;
  qIsMultiple: boolean;
}

export interface DataTableEx {
  qName: string;
  qFields: DataField[];
  qFormatSpec: string;
}

export interface SearchCombinationOptions {
  qSearchFields: string[];
  qContext?: SearchContextType;
  qCharEncoding?: CharEncodingType;
  qAttributes: string[];
}

export const enum SearchContextType {
  CONTEXT_CLEARED = 'Cleared',
  CONTEXT_LOCKED_FIELDS_ONLY = 'LockedFieldsOnly',
  CONTEXT_CURRENT_SELECTIONS = 'CurrentSelections',
}

export const enum CharEncodingType {
  CHAR_ENCODING_UTF8 = 'Utf8',
  CHAR_ENCODING_UTF16 = 'Utf16',
}

export interface SearchSuggestionResult {
  qSuggestions: SearchSuggestItem[];
  qFieldNames: string[];
}

export interface SearchSuggestItem {
  qValue: string;
  qTerm: number;
}

export interface SearchPage {
  qOffset: number;
  qCount: number;
  qMaxNbrFieldMatches?: number;
  qGroupOptions: SearchGroupOptions[];
  qGroupItemOptions: SearchGroupItemOptions[];
}

export interface SearchGroupOptions {
  qGroupType: SearchGroupType;
  qOffset?: number;
  qCount?: number;
}

export const enum SearchGroupType {
  DATASET_GROUP = 'DatasetType',
  GENERIC_OBJECTS_GROUP = 'GenericObjectsType',
}

export interface SearchGroupItemOptions {
  qGroupItemType: SearchGroupItemType;
  qOffset?: number;
  qCount?: number;
}

export const enum SearchGroupItemType {
  FIELD = 'Field',
  GENERIC_OBJECT = 'GenericObject',
}

export interface SearchAssociationResult {
  qFieldNames: string[];
  qSearchTerms: string[];
  qFieldDictionaries: SearchFieldDictionary[];
  qSearchTermsMatched: SearchMatchCombinations[];
  qTotalSearchResults: number;
}

export interface SearchFieldDictionary {
  qField: number;
  qResult: SearchTermResult[];
}

export interface SearchTermResult {
  qText: string;
  qElemNumber: number;
  qRanges: SearchCharRange[];
}

export interface SearchCharRange {
  qCharPos: number;
  qCharCount: number;
  qTerm: number;
}

export type SearchMatchCombinations = SearchMatchCombination[];

export interface SearchMatchCombination {
  qId: number;
  qFieldMatches: SearchFieldMatch[];
}

export interface SearchFieldMatch {
  qField: number;
  qValues: number[];
  qTerms: number[];
  qNoOfMatches: number;
}

export interface SearchResult {
  qSearchTerms: string[];
  qTotalNumberOfGroups: number;
  qSearchGroupArray: SearchGroup[];
}

export interface SearchGroup {
  qId: number;
  qGroupType: SearchGroupType;
  qSearchTermsMatched: number[];
  qTotalNumberOfItems: number;
  qItems: SearchGroupItem[];
}

export interface SearchGroupItem {
  qItemType: SearchGroupItemType;
  qTotalNumberOfMatches: number;
  qIdentifier: string;
  qItemMatches: SearchGroupItemMatch[];
  qSearchTermsMatched: number[];
}

export interface SearchGroupItemMatch {
  qText: string;
  qFieldSelectionMode: SearchFieldSelectionMode;
  qRanges: SearchCharRange[];
  qAttributes: SearchAttribute[];
}

export const enum SearchFieldSelectionMode {
  ONE_AND_ONLY_ONE = 'OneAndOnlyOne',
}

export interface SearchAttribute {
  qKey: string;
  qValue: string;
}

export interface SearchObjectOptions {
  qAttributes: string[];
  qCharEncoding?: CharEncodingType;
}

export interface FieldOrColumn {
  qFieldName: string;
  qTableName: string;
}

export interface SampleResult {
  qFieldOrColumn: FieldOrColumn;
  qValues: FieldValue[];
}

export interface AppScript {
  qScript: string;
  qMeta: NxMeta;
}

export interface ProgressData {
  qStarted: boolean;
  qFinished: boolean;
  qCompleted: number;
  qTotal: number;
  qKB: number;
  qMillisecs: number;
  qUserInteractionWanted: boolean;
  qPersistentProgress: string;
  qTransientProgress: string;
  qErrorData: ErrorData[];
  qPersistentProgressMessages: ProgressMessage[];
  qTransientProgressMessage: ProgressMessage;
}

export interface ErrorData {
  qErrorString: string;
  qLineEnd: string;
  qLine: string;
  qErrorDataCode: ErrorDataCode;
  qMessage: ProgressMessage;
}

export const enum ErrorDataCode {
  EDC_ERROR = 'EDC_ERROR',
  EDC_WARNING = 'EDC_WARNING',
  EDC_CIRCULAR_REFERENCE = 'EDC_CIRCULAR_REFERENCE',
}

export interface ProgressMessage {
  qMessageCode: number;
  qMessageParameters: string[];
}

export interface DocListEntry {
  qDocName: string;
  qConnectedUsers: number;
  qFileTime: number;
  qFileSize: number;
  qDocId: string;
  qMeta: NxMeta;
  qLastReloadTime: string;
  qReadOnly: boolean;
  qTitle: string;
  qThumbnail: StaticContentUrl;
  qHasSectionAccess: boolean;
}

export interface InteractDef {
  qType: InteractType;
  qTitle: string;
  qMsg: string;
  qButtons: number;
  qLine: string;
  qOldLineNr: number;
  qNewLineNr: number;
  qPath: string;
  qHidden: boolean;
  qResult: number;
  qInput: string;
}

export const enum InteractType {
  IT_MSGBOX = 'IT_MSGBOX',
  IT_SCRIPTLINE = 'IT_SCRIPTLINE',
  IT_BREAK = 'IT_BREAK',
  IT_INPUT = 'IT_INPUT',
  IT_END = 'IT_END',
  IT_PASSWD = 'IT_PASSWD',
  IT_USERNAME = 'IT_USERNAME',
}

export interface AppEntry {
  qID: string;
  qTitle: string;
  qPath: string;
  qLastReloadTime: string;
  qReadOnly: boolean;
  qMeta: NxMeta;
  qThumbnail: StaticContentUrl;
  qFileSize: number;
  qHasSectionAccess: boolean;
}

export const enum BNFType {
  SCRIPT_TEXT_SCRIPT = 'S',
  SCRIPT_TEXT_EXPRESSION = 'E',
}

export interface BNFDef {
  qBnf: number[];
  qNbr: number;
  qPNbr: number;
  qHelpId: number;
  qName: string;
  qStr: string;
  qIsBnfRule?: boolean;
  qScriptStatement?: boolean;
  qControlStatement?: boolean;
  qBnfLiteral?: boolean;
  qQvFunc?: boolean;
  qAggrFunc?: boolean;
  qFG: FunctionGroup;
  qFieldFlag?: boolean;
  qMT: BNFDefMetaType;
  qDepr?: boolean;
  qFGList: FunctionGroup[];
}

export const enum FunctionGroup {
  FUNC_GROUP_ALL = 'ALL',
  FUNC_GROUP_UNKNOWN = 'U',
  FUNC_GROUP_NONE = 'NONE',
  FUNC_GROUP_AGGR = 'AGGR',
  FUNC_GROUP_NUMERIC = 'NUM',
  FUNC_GROUP_RANGE = 'RNG',
  FUNC_GROUP_EXPONENTIAL_AND_LOGARITHMIC = 'EXP',
  FUNC_GROUP_TRIGONOMETRIC_AND_HYPERBOLIC = 'TRIG',
  FUNC_GROUP_FINANCIAL = 'FIN',
  FUNC_GROUP_MATH_CONSTANT_AND_PARAM_FREE = 'MATH',
  FUNC_GROUP_COUNTER = 'COUNT',
  FUNC_GROUP_STRING = 'STR',
  FUNC_GROUP_MAPPING = 'MAPP',
  FUNC_GROUP_INTER_RECORD = 'RCRD',
  FUNC_GROUP_CONDITIONAL = 'CND',
  FUNC_GROUP_LOGICAL = 'LOG',
  FUNC_GROUP_NULL = 'NULL',
  FUNC_GROUP_SYSTEM = 'SYS',
  FUNC_GROUP_FILE = 'FILE',
  FUNC_GROUP_TABLE = 'TBL',
  FUNC_GROUP_DATE_AND_TIME = 'DATE',
  FUNC_GROUP_NUMBER_INTERPRET = 'NUMI',
  FUNC_GROUP_FORMATTING = 'FRMT',
  FUNC_GROUP_COLOR = 'CLR',
  FUNC_GROUP_RANKING = 'RNK',
  FUNC_GROUP_GEO = 'GEO',
  FUNC_GROUP_EXTERNAL = 'EXT',
  FUNC_GROUP_PROBABILITY = 'PROB',
  FUNC_GROUP_ARRAY = 'ARRAY',
  FUNC_GROUP_LEGACY = 'LEG',
}

export const enum BNFDefMetaType {
  NOT_META = 'N',
  META_DOC_NAME = 'D',
  META_RET_TYPE = 'R',
  META_DEFAULT_VALUE = 'V',
}

export interface Function {
  qName: string;
  qGroup: FunctionGroup;
  qSignature: string;
}

export interface OdbcDsn {
  qName: string;
  qDescription: string;
  qBit32?: boolean;
  qUserOnly?: boolean;
}

export interface OleDbProvider {
  qName: string;
  qDescription: string;
  qBit32?: boolean;
}

export interface DriveInfo {
  qDrive: string;
  qType: string;
  qName: string;
  qTypeIdentifier: DriveType;
  qUnnamedDrive: boolean;
}

export const enum DriveType {
  REMOVABLE = 'REMOVABLE',
  FIXED = 'FIXED',
  NETWORK = 'NETWORK',
  CD_ROM = 'CD_ROM',
  RAM = 'RAM',
  UNKNOWN_TYPE = 'UNKNOWN_TYPE',
}

export interface CodePage {
  qNumber: number;
  qName: string;
  qDescription: string;
}

export interface CustomConnector {
  qProvider: string;
  qParent: string;
  qDisplayName: string;
  qMachineMode: GenericConnectMachine;
  qSupportFileStreaming: boolean;
}

export const enum GenericConnectMachine {
  CONNECT_DEFAULT = 'CONNECT_DEFAULT',
  CONNECT_64 = 'CONNECT_64',
  CONNECT_32 = 'CONNECT_32',
}

export interface NxStreamListEntry {
  qName: string;
  qId: string;
}

export interface NxEngineVersion {
  qComponentVersion: string;
}
