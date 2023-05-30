import { MatTableDataSource } from "@angular/material/table";
export interface ContextButtons {
    name: string;
    onClick: ([]) => void;
}
  
export interface TableDefination {
  dataSource: MatTableDataSource<object>;
  data: object[];
  displayedColumns: string[];
  contextButtons?: ContextButtons[];
}
