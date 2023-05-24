import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  localItem:string|null;
  products :Product[];
  constructor(){
    this.localItem=localStorage.getItem("products");
    this.products=[];
    if (this.localItem == null) {
      this.products = [
        {
          name:"Watch",
          price:2000,
          quantity:15,
          manufactureDate:'23-05-2022',
          expireDate:'23-05-2024',
          available:true,
          freshness:"Brand New",
        }
      ];
    } else {
      this.products = JSON.parse(this.localItem);
    }
  }  
  productAdd(product:Product){
    this.products.push(product);
    localStorage.setItem("products",JSON.stringify(this.products));
  }
  productDelete(product:Product){
    const index=this.products.indexOf(product);
    this.products.splice(index,1);
    localStorage.setItem("products",JSON.stringify(this.products));
  }
  
}
