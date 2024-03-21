import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { GroceryProductComponent } from './product/grocery-product/grocery-product.component';

const routes: Routes = [
  { path: "productpage", component: ProductComponent },
  { path: "grocery", component: GroceryProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
