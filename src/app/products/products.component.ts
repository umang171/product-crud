import { Component } from '@angular/core';
import { Product } from '../model/product';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product-service/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  localItem:string|null;
  products :Product[];
  isEdit:boolean=false;
  editproduct!:Product;
  editIndex!:number;
  constructor(private activatedRoute: ActivatedRoute,private productService:ProductService){  
    
    this.localItem=localStorage.getItem("products");
    this.products=[];
   
  }  
  
ngOnInit() {
  this.products=JSON.parse(this.productService.getProducts()||"");
  this.isEdit=(this.activatedRoute.snapshot.paramMap.get('name')!=null);
  if(this.isEdit)
  {
    this.editproduct=this.products.filter((prod:Product)=>prod.name==this.activatedRoute.snapshot.paramMap.get('name'))[0];
    this.editIndex=this.products.indexOf(this.editproduct);
    console.log("edtIdx",this.editIndex);
  }
}
  productAdd(product:Product){
    // this.products=JSON.parse(this.productService.getProducts()||"");
    // this.products.push(product);
    // localStorage.setItem("products",JSON.stringify(this.products));
    this.productService.addProduct(product);
  }
  productDelete(product:Product){
    
  }
  
}
