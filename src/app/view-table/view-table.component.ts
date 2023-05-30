import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ContextButtons, TableDefination } from '../model/tabledefination';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent implements OnInit, AfterViewInit {
  @Input()
  tableDefination!: TableDefination;
  displayedColumns!: string[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Output()
  deleteObject: EventEmitter<object> = new EventEmitter();
  @Output()
  editObject: EventEmitter<object> = new EventEmitter();
  contextButtons!: ContextButtons[];

  constructor() { }
  
  ngOnInit(): void {
    this.tableDefination.dataSource.data = this.tableDefination.data;
    this.displayedColumns = this.tableDefination.displayedColumns.filter((name: string) => name !== "actions");
    this.contextButtons = this.tableDefination.contextButtons || [];
  }
  
  ngAfterViewInit(): void {
    this.tableDefination.dataSource.paginator = this.paginator;
    this.tableDefination.dataSource.sort = this.sort;
  }
  
  applyFilter(filterValue: string): void {
    this.tableDefination.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.tableDefination.dataSource.paginator) {
      this.tableDefination.dataSource.paginator.firstPage();
    }
  }
 
}
