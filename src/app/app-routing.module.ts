import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { GroceryProductComponent } from './product/grocery-product/grocery-product.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { ProductlistComponent } from './product/productlist/productlist.component';

const routes: Routes = [
  { path: "productpage", component: ProductComponent },
  { path: "grocery", component: GroceryProductComponent },
  { path: "addstudent", component: AddstudentComponent },
  { path: "adduser", component: AdduserComponent },
  { path: "productList", component: ProductlistComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
