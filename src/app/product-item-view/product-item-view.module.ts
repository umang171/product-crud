import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductItemViewRoutingModule } from './product-item-view-routing.module';
import { ProductItemViewComponent } from './product-item-view.component';


@NgModule({
  declarations: [
    ProductItemViewComponent
  ],
  imports: [
    CommonModule,
    ProductItemViewRoutingModule
  ]
})
export class ProductItemViewModule { }
