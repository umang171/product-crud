import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { ProductService } from '../product-service/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Input() isEdit!:boolean;
  @Input() editIndex!:number;
  name!:string;
  quantity!:number;
  price!:number;
  manDate!:string;
  expDate!:string;
  available!:boolean;
  freshness!:string;
  category!:string;
  date = new Date().toISOString().slice(0, 10);
  @Output()
  addProduct:EventEmitter<Product>=new EventEmitter();

  constructor(private router: Router,private produtService:ProductService){
  }
  ngOnInit(): void {
    if(this.isEdit){
      let product:Product=JSON.parse(localStorage.getItem("products")||"")[this.editIndex];
      this.name=product.name;
      this.price=product.price;
      this.quantity=product.quantity;
      this.expDate=product.expireDate;
      this.manDate=product.manufactureDate;
      this.available=product.available;
      this.freshness=product.freshness;
      this.category=product.category||"";
      
    }
  }

  onSubmit():void{
    const product={
      name:this.name,
      price:this.price,
      quantity:this.quantity,
      manufactureDate:this.manDate,
      expireDate:this.expDate,
      available:this.available,
      freshness:this.freshness,
      category:this.category,
    }
    if(this.isEdit){
      this.produtService.editProduct(product,this.editIndex);
      alert("Product is updated");
    }
    else{
      this.addProduct.emit(product);
      alert("Product is added");
    }
    this.router.navigate(['/']);
  }
}
