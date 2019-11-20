import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { LISTPRODUCT } from '../models/fake-data';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart-body',
  templateUrl: './cart-body.component.html',
  styleUrls: ['./cart-body.component.css']
})
export class CartBodyComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>();
  @Output() totalBill = new EventEmitter<any>();

  public products = LISTPRODUCT;
  public total = 0;
  constructor(private productService: ProductService, private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.totalProduct();
    }, 0);
  }
  // tslint:disable-next-line:use-lifecycle-interface

  removerProduct(id: number) {
    this.productService.deleteProduct(id);
    this.totalProduct();
  }

  inputQuantity(id: number, inputElement: HTMLInputElement) {
    // tslint:disable-next-line:radix
    const par = parseInt(inputElement.value);
    const product = this.products.find(pro => pro.id === id);
    if (product) {
      product.quantity = par || 0;
      // var sumMonney = product.quantity * product.price;
      // console.log(sumMonney);
    }
    this.totalProduct();
  }

  totalProduct() {
    let total = 0;
    let sumItem = 0;
    let sumAllProduct = 0;
    // let sumTax = 0;
    const tax = 10;
    this.products.map(item => {
      total += item.quantity;
      sumItem = item.quantity * item.price;
      sumAllProduct += sumItem;
      // sumTax = sumAllProduct * tax / 100;
    });
    this.newItemEvent.emit(total);
    this.totalBill.emit(sumAllProduct);
  }

  // reset(id: number) {
  //    this.products.map(data => {
  //     if (data.id === id) {
  //       data.quantity = 0;
  //     }
  //     this.newItemEvent.emit(data.quantity);
  //   });
  // }


}
