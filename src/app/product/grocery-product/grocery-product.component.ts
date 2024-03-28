import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grocery-product',
  templateUrl: './grocery-product.component.html',
  styleUrls: ['./grocery-product.component.scss']
})
export class GroceryProductComponent {
  @Input() prods: any = [];
  @Output() grocerySelectedEvent = new EventEmitter<string>();

  studentname = '';
  constructor() {
  }

  ngOnInit() {

  }

  selectNationality(event: any) {
    console.log(event.target.value)
    this.grocerySelectedEvent.emit(event.target.value);
  }
}
