import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  title = 'AngularDemo';
  today = new Date();

  products = [
    { id: 1, name: 'Book', price: 50, inStock: true },
    { id: 2, name: 'Bag', price: 500, inStock: true },
    { id: 3, name: 'Pen', price: 10, inStock: false },
    { id: 4, name: 'Pencil', price: 20, inStock: true },
    { id: 5, name: 'Shoes', price: 1500, inStock: false },
  ]
}
