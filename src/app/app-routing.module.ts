import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductItemViewComponent } from './product-item-view/product-item-view.component';

const routes: Routes = [
  {
    'path':'',
    'component':ProductItemViewComponent
  },  
  {
    'path':'products',
    'component':ProductsComponent
  },
  {
    'path':'edit/:name',
    "component":ProductsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
