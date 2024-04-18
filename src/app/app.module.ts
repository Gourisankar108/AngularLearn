import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroceryProductComponent } from './product/grocery-product/grocery-product.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { AdduserComponent } from './user/adduser/adduser.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GroceryProductComponent,
    AddstudentComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
