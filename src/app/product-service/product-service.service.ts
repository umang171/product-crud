import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products!:Product[];
  constructor() { }

  getProducts(){
    return localStorage.getItem("products");
  }

  addProduct(product:Product){
    this.products=JSON.parse(this.getProducts()||"");
    this.products.push(product);
    localStorage.setItem("products",JSON.stringify(this.products)); 
  }

  editProduct(product:Product,editIndex:number){
    let localItems=JSON.parse(this.getProducts()||"");
      localItems[editIndex]=product;
      localStorage.setItem("products",JSON.stringify(localItems));
  }

  deleteProduct(product:Product){
    return JSON.parse(this.getProducts()||"").filter((prod:Product)=>prod.name!=product.name);
  }
  
}