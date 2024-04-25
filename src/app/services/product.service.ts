import { Injectable } from '@angular/core';
import { HttputilityService } from './httputility.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpService:HttputilityService
  ) { }

  getAllProducts() {
    return this.httpService.get('products');
  }
}
