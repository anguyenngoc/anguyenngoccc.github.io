import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { LISTPRODUCT } from './models/fake-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product = LISTPRODUCT;

  constructor() { }


  deleteProduct(id: number): boolean {
    const index = this.product.findIndex(data => data.id === id);

    if (index !== -1) {
      this.product.splice(index, 1);
      return true;
    }
    return false;
  }
  

}
