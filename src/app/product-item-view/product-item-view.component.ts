import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Product } from '../model/product';
import { ProductService } from '../product-service/product-service.service';
import { TableDefination } from '../model/tabledefination';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item-view',
  templateUrl: './product-item-view.component.html',
  styleUrls: ['./product-item-view.component.css']
})
export class ProductItemViewComponent implements OnInit {
  dataSource: MatTableDataSource<object>;
  displayedColumns: string[] = ['name', 'price', 'quantity', 'manufactureDate', 'expireDate','category', 'available', 'freshness','actions'];
  tableDefination:TableDefination;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router,private productService:ProductService) {
    this.dataSource = new MatTableDataSource<object>([]);
    
    this.tableDefination={
      dataSource:this.dataSource,
      data:JSON.parse(this.productService.getProducts()||""),
      displayedColumns:this.displayedColumns,
      contextButtons:[
        {
          name: "Edit",
          onClick: (product:any) => {
            this.router.navigate(['/edit/'+product.name]);
          }
        },
        {
          name: "Delete",
          onClick: (product:any) => {
            if(confirm("Are you sure you want to delete!")){
     
              localStorage.setItem("products",JSON.stringify(this.productService.deleteProduct(product)));
              this.loadProducts();
            }
          }
        }
    ]
    };
    
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    const localItem: string | null = this.productService.getProducts();
    if (localItem == null||localItem=='{}') {
      this.dataSource.data = [
        {
          name: "Watch",
          price: 2000,
          quantity: 15,
          manufactureDate: '23-05-2022',
          expireDate: '23-05-2024',
          available: true,
          freshness: "Brand New",
          category: "Electronic",
        }
      ];
    } else {
      this.dataSource.data = JSON.parse(localItem);
    }
  }  
}
