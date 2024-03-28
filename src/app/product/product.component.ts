import { Component, ViewChild } from '@angular/core';
import { GroceryProductComponent } from './grocery-product/grocery-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  title = 'AngularDemo';
  today = new Date();
  imgPath = 'https://www.mapsofindia.com/maps/india/india-political-map.gif';
  showImage: boolean = true;
  selectedProduct = '';
  @ViewChild(GroceryProductComponent) groceryChildComponent: GroceryProductComponent = new GroceryProductComponent();

  constructor() {
  }

  ngOnInit() {

  }

  products = [
    { id: 1, name: 'Book', price: 50, inStock: true },
    { id: 2, name: 'Bag', price: 500, inStock: true },
    { id: 3, name: 'Pen', price: 10, inStock: false },
    { id: 4, name: 'Pencil', price: 20, inStock: true },
    { id: 5, name: 'Shoes', price: 1500, inStock: false },
    { id: 5, name: 'eraser', price: 15, inStock: false },

  ]

  selectedProductName = "";

  childDataChange(event: any) {
    this.groceryChildComponent.studentname = event.target.value;
  }
  
  toggleImage() {
    this.showImage = !this.showImage;
  }

  displaySelected() {
    alert(this.selectedProductName);
  }

  selectedEvent(ev: string) {
    this.selectedProduct = ev;
  }

}
