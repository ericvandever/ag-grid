// Type definitions for ag-grid v5.4.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { Column } from "./entities/column";
export declare class SortController {
    private static DEFAULT_SORTING_ORDER;
    private gridOptionsWrapper;
    private columnController;
    private eventService;
    progressSort(column: Column, multiSort: boolean): void;
    private dispatchSortChangedEvents();
    private clearSortBarThisColumn(columnToSkip);
    private getNextSortDirection(column);
    getSortModel(): {
        colId: string;
        sort: string;
    }[];
    getServerSideSortModel(): {
        field: string;
        dir: string;
        type: string;
        subType: string;
    }[];
    setSortModel(sortModel: any): void;
    getColumnsWithSortingOrdered(): Column[];
    getSortForRowController(): any[];
}
