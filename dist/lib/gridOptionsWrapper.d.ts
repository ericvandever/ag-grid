// Type definitions for ag-grid v10.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { RowNode } from "./entities/rowNode";
import { GetContextMenuItems, GetMainMenuItems, GetRowNodeIdFunc, GridOptions, NavigateToNextCellParams, NodeChildDetails, PostProcessPopupParams, ProcessRowParams, TabToNextCellParams } from "./entities/gridOptions";
import { GridApi } from "./gridApi";
import { ColDef, ColGroupDef, IAggFunc } from "./entities/colDef";
import { ColumnApi } from "./columnController/columnController";
import { IViewportDatasource } from "./interfaces/iViewportDatasource";
import { ICellRendererComp, ICellRendererFunc } from "./rendering/cellRenderers/iCellRenderer";
import { IDatasource } from "./rowModels/iDatasource";
import { GridCellDef } from "./entities/gridCell";
import { IEnterpriseDatasource } from "./interfaces/iEnterpriseDatasource";
import { BaseExportParams, ProcessCellForExportParams } from "./exportParams";
export declare class GridOptionsWrapper {
    private static MIN_COL_WIDTH;
    static PROP_HEADER_HEIGHT: string;
    static PROP_GROUP_REMOVE_SINGLE_CHILDREN: string;
    static PROP_PIVOT_HEADER_HEIGHT: string;
    static PROP_GROUP_HEADER_HEIGHT: string;
    static PROP_PIVOT_GROUP_HEADER_HEIGHT: string;
    static PROP_FLOATING_FILTERS_HEIGHT: string;
    private gridOptions;
    private columnController;
    private eventService;
    private enterprise;
    private frameworkFactory;
    private propertyEventService;
    private fullWidthCellRenderer;
    private groupRowRenderer;
    private groupRowInnerRenderer;
    private domDataKey;
    private agWire(gridApi, columnApi);
    private destroy();
    init(): void;
    private setupFrameworkComponents();
    getDomData(element: Element, key: string): any;
    setDomData(element: Element, key: string, value: any): any;
    getFullWidthCellRenderer(): {
        new (): ICellRendererComp;
    } | ICellRendererFunc | string;
    getGroupRowRenderer(): {
        new (): ICellRendererComp;
    } | ICellRendererFunc | string;
    getGroupRowInnerRenderer(): {
        new (): ICellRendererComp;
    } | ICellRendererFunc | string;
    isEnterprise(): boolean;
    isRowSelection(): boolean;
    isRowDeselection(): boolean;
    isRowSelectionMulti(): boolean;
    getContext(): any;
    isPivotMode(): boolean;
    isRowModelInfinite(): boolean;
    isRowModelViewport(): boolean;
    isRowModelEnterprise(): boolean;
    isRowModelDefault(): boolean;
    isFullRowEdit(): boolean;
    isSuppressFocusAfterRefresh(): boolean;
    isShowToolPanel(): boolean;
    isToolPanelSuppressRowGroups(): boolean;
    isToolPanelSuppressValues(): boolean;
    isToolPanelSuppressPivots(): boolean;
    isToolPanelSuppressPivotMode(): boolean;
    isSuppressTouch(): boolean;
    useAsyncEvents(): boolean;
    isEnableCellChangeFlash(): boolean;
    isGroupSelectsChildren(): boolean;
    isGroupSelectsFiltered(): boolean;
    isGroupHideOpenParents(): boolean;
    isGroupMultiAutoColumn(): boolean;
    isGroupRemoveSingleChildren(): boolean;
    isGroupIncludeFooter(): boolean;
    isGroupSuppressBlankHeader(): boolean;
    isSuppressRowClickSelection(): boolean;
    isSuppressCellSelection(): boolean;
    isSuppressMultiSort(): boolean;
    isGroupSuppressAutoColumn(): boolean;
    isSuppressDragLeaveHidesColumns(): boolean;
    isSuppressScrollOnNewData(): boolean;
    isForPrint(): boolean;
    isAutoHeight(): boolean;
    isSuppressHorizontalScroll(): boolean;
    isSuppressLoadingOverlay(): boolean;
    isSuppressNoRowsOverlay(): boolean;
    isSuppressErrorOverlay(): boolean;
    isSuppressFieldDotNotation(): boolean;
    getFloatingTopRowData(): any[];
    getFloatingBottomRowData(): any[];
    isFunctionsPassive(): boolean;
    isSuppressRowHoverClass(): boolean;
    isSuppressTabbing(): boolean;
    getQuickFilterText(): string;
    isCacheQuickFilter(): boolean;
    isUnSortIcon(): boolean;
    isSuppressMenuHide(): boolean;
    getRowStyle(): any;
    getRowClass(): any;
    getRowStyleFunc(): Function;
    getRowClassFunc(): Function;
    getPostProcessPopupFunc(): (params: PostProcessPopupParams) => void;
    getDoesDataFlowerFunc(): (data: any) => boolean;
    getIsFullWidthCellFunc(): (rowNode: RowNode) => boolean;
    getFullWidthCellRendererParams(): any;
    isEmbedFullWidthRows(): boolean;
    getBusinessKeyForNodeFunc(): (node: RowNode) => string;
    getHeaderCellRenderer(): any;
    getApi(): GridApi;
    getColumnApi(): ColumnApi;
    isDeltaRowDataMode(): boolean;
    isEnableColResize(): boolean;
    isSingleClickEdit(): boolean;
    isSuppressClickEdit(): boolean;
    isStopEditingWhenGridLosesFocus(): boolean;
    getGroupDefaultExpanded(): number;
    getAutoSizePadding(): number;
    getMaxConcurrentDatasourceRequests(): number;
    getMaxBlocksInCache(): number;
    getCacheOverflowSize(): number;
    getPaginationPageSize(): number;
    getCacheBlockSize(): number;
    getInfiniteInitialRowCount(): number;
    isPurgeClosedRowNodes(): boolean;
    getPaginationStartPage(): number;
    isSuppressPaginationPanel(): boolean;
    getRowData(): any[];
    isGroupUseEntireRow(): boolean;
    isEnableRtl(): boolean;
    getGroupColumnDef(): ColDef;
    isGroupSuppressRow(): boolean;
    getRowGroupPanelShow(): string;
    getPivotPanelShow(): string;
    isAngularCompileRows(): boolean;
    isAngularCompileFilters(): boolean;
    isAngularCompileHeaders(): boolean;
    isDebug(): boolean;
    getColumnDefs(): (ColGroupDef | ColDef)[];
    getDatasource(): IDatasource;
    getViewportDatasource(): IViewportDatasource;
    getEnterpriseDatasource(): IEnterpriseDatasource;
    isEnableSorting(): boolean;
    isEnableCellExpressions(): boolean;
    isEnableGroupEdit(): boolean;
    isSuppressMiddleClickScrolls(): boolean;
    isSuppressPreventDefaultOnMouseWheel(): boolean;
    isSuppressColumnVirtualisation(): boolean;
    isSuppressContextMenu(): boolean;
    isAllowContextMenuWithControlKey(): boolean;
    isSuppressCopyRowsToClipboard(): boolean;
    isEnableFilter(): boolean;
    isPagination(): boolean;
    isEnableServerSideFilter(): boolean;
    isEnableServerSideSorting(): boolean;
    isSuppressScrollLag(): boolean;
    isSuppressMovableColumns(): boolean;
    isAnimateRows(): boolean;
    isSuppressColumnMoveAnimation(): boolean;
    isSuppressMenuColumnPanel(): boolean;
    isSuppressMenuFilterPanel(): boolean;
    isSuppressUseColIdForGroups(): boolean;
    isSuppressAggFuncInHeader(): boolean;
    isSuppressAggAtRootLevel(): boolean;
    isSuppressMenuMainPanel(): boolean;
    isEnableRangeSelection(): boolean;
    isPaginationAutoPageSize(): boolean;
    isRememberGroupStateWhenNewData(): boolean;
    getIcons(): any;
    getAggFuncs(): {
        [key: string]: IAggFunc;
    };
    getIsScrollLag(): () => boolean;
    getSortingOrder(): string[];
    getSlaveGrids(): GridOptions[];
    getGroupRowRendererParams(): any;
    getOverlayErrorTemplate(): string;
    getOverlayLoadingTemplate(): string;
    getOverlayNoRowsTemplate(): string;
    isSuppressAutoSize(): boolean;
    isSuppressParentsInRowNodes(): boolean;
    isEnableStatusBar(): boolean;
    isFunctionsReadOnly(): boolean;
    isFloatingFilter(): boolean;
    getDefaultColDef(): ColDef;
    getDefaultColGroupDef(): ColGroupDef;
    getDefaultExportParams(): BaseExportParams;
    getHeaderCellTemplate(): string;
    getHeaderCellTemplateFunc(): (params: any) => string | HTMLElement;
    getNodeChildDetailsFunc(): ((dataItem: any) => NodeChildDetails);
    getGroupRowAggNodesFunc(): (nodes: RowNode[]) => any;
    getContextMenuItemsFunc(): GetContextMenuItems;
    getMainMenuItemsFunc(): GetMainMenuItems;
    getRowNodeIdFunc(): GetRowNodeIdFunc;
    getNavigateToNextCellFunc(): (params: NavigateToNextCellParams) => GridCellDef;
    getTabToNextCellFunc(): (params: TabToNextCellParams) => GridCellDef;
    getProcessSecondaryColDefFunc(): (colDef: ColDef) => void;
    getProcessSecondaryColGroupDefFunc(): (colGroupDef: ColGroupDef) => void;
    getSendToClipboardFunc(): (params: any) => void;
    getProcessCellForClipboardFunc(): (params: ProcessCellForExportParams) => any;
    getProcessCellFromClipboardFunc(): (params: ProcessCellForExportParams) => any;
    getViewportRowModelPageSize(): number;
    getViewportRowModelBufferSize(): number;
    setProperty(key: string, value: any): void;
    addEventListener(key: string, listener: Function): void;
    removeEventListener(key: string, listener: Function): void;
    executeProcessRowPostCreateFunc(params: ProcessRowParams): void;
    getHeaderHeight(): number;
    getFloatingFiltersHeight(): number;
    getGroupHeaderHeight(): number;
    getPivotHeaderHeight(): number;
    getPivotGroupHeaderHeight(): number;
    isExternalFilterPresent(): boolean;
    doesExternalFilterPass(node: RowNode): boolean;
    getDocument(): Document;
    getLayoutInterval(): number;
    getMinColWidth(): number;
    getMaxColWidth(): number;
    getColWidth(): number;
    getRowBuffer(): number;
    getScrollbarWidth(): number;
    private checkForDeprecated();
    getLocaleTextFunc(): Function;
    globalEventHandler(eventName: string, event?: any): void;
    getRowHeightAsNumber(): number;
    getRowHeightForNode(rowNode: RowNode): number;
    private isNumeric(value);
}
