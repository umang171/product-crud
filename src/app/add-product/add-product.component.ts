import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  name!:string;
  quantity!:number;
  price!:number;
  manDate!:string;
  expDate!:string;
  available!:boolean;
  freshness!:string;
  date = new Date().toISOString().slice(0, 10);
  @Output()
  addProduct:EventEmitter<Product>=new EventEmitter();

  constructor(){}

  onSubmit():void{
    const product={
      name:this.name,
      price:this.price,
      quantity:this.quantity,
      manufactureDate:this.manDate,
      expireDate:this.expDate,
      available:this.available,
      freshness:this.freshness,
    }
    this.addProduct.emit(product);
  }
}
