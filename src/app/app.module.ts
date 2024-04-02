import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { GroceryProductComponent } from './product/grocery-product/grocery-product.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GroceryProductComponent,
    AddstudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
