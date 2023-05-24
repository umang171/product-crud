import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent {
  @Input()
  products!: Product[];
  @Output()
  deleteProduct: EventEmitter<Product> = new EventEmitter();
  
  @Output()
  editProduct: EventEmitter<Product> = new EventEmitter();
  index!:number;
  isEdit: boolean = false;
  localItems=JSON.parse(localStorage.getItem("products")||"");

  onDelete(product: Product) {
    this.deleteProduct.emit(product);
  }
  toggleEdit(product: Product) {
    if (this.isEdit && product.isEditing) {
      this.saveProduct(product,this.index);
    } else {
      product.isEditing = !product.isEditing;
      this.isEdit = product.isEditing;

    }
  }

  saveProduct(product: Product,index:number) {
    this.index=index;
    product.isEditing = false;
    this.isEdit = false;
    this.localItems[index]=product;
    localStorage.setItem("products",JSON.stringify(this.localItems));
  }

  cancelEdit(product: Product) {
    product.isEditing = false;
    this.isEdit = false;
  }
}
