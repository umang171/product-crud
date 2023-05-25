import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-item-view',
  templateUrl: './product-item-view.component.html',
  styleUrls: ['./product-item-view.component.css']
})
export class ProductItemViewComponent implements OnInit,AfterViewInit {
  dataSource: MatTableDataSource<Product>;
  displayedColumns: string[] = ['name', 'price', 'quantity', 'manufactureDate', 'expireDate', 'available', 'freshness','actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource<Product>([]);
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    const localItem: string | null = localStorage.getItem("products");
    if (localItem == null) {
      this.dataSource.data = [
        {
          name: "Watch",
          price: 2000,
          quantity: 15,
          manufactureDate: '23-05-2022',
          expireDate: '23-05-2024',
          available: true,
          freshness: "Brand New",
        }
      ];
    } else {
      this.dataSource.data = JSON.parse(localItem);
    }
   
  }

  applyFilter(filterValue: string): void {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  deleteProduct(product:Product){
    if(confirm("Are you sure you want to delete!")){
      const index=this.dataSource.data.indexOf(product);
      this.dataSource.data.splice(index,1);
      localStorage.setItem("products",JSON.stringify(this.dataSource.data));
      this.loadProducts();
    }
  }
  editProduct(product:Product){

  }
  
}
