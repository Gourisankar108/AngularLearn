import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent {

  products:any = [];
  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((response: any) => {
      console.log(response)
      this.products = response.products;
    }, (err) => {
      console.error(err.error.message);
    })
  }
}
