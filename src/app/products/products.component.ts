import { Component } from '@angular/core';
import { Product } from '../model/product';
import {Router, ActivatedRoute, Params } from '@angular/router';

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
  constructor(private activatedRoute: ActivatedRoute){  
    
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
  
ngOnInit() {
  this.isEdit=(this.activatedRoute.snapshot.paramMap.get('name')!=null);
  if(this.isEdit)
  {
    this.editproduct=this.products.filter((prod:Product)=>prod.name==this.activatedRoute.snapshot.paramMap.get('name'))[0];
    this.editIndex=this.products.indexOf(this.editproduct);
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
