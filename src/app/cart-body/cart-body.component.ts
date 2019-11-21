import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef, Input, OnChanges } from '@angular/core';
import { LISTPRODUCT } from '../models/fake-data';
import { ProductService } from '../product.service';

export const PromoCode = [
  { cd: 'ccc', sale: 100000 }
];

@Component({
  selector: 'app-cart-body',
  templateUrl: './cart-body.component.html',
  styleUrls: ['./cart-body.component.css']
})
export class CartBodyComponent implements OnInit, OnChanges {

  @Output() newItemEvent = new EventEmitter<any>();
  @Output() totalBill = new EventEmitter<any>();
  @Output() subTotal = new EventEmitter<any>();
  @Input() proCode;
  public products = LISTPRODUCT;
  public item = true;
  public promoCode = PromoCode;

  constructor(private productService: ProductService, private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.totalProduct();
    }, 0);
  }
  ngOnChanges() {
    if (this.proCode !== undefined) {
      console.log(this.proCode);
      this.promoCodeSale();
    }
  }

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
    let sumTax = 0;
    let sum = 0;
    // let sumSale = 0;
    const sumsaletax = 0;
    const tax = 10;
    this.products.map(item => {
      total += item.quantity;
      sumItem = item.quantity * item.price;
      sumAllProduct += sumItem;
      if (tax > 0) {
        sumTax = sumAllProduct * tax / 100;
        sum = sumAllProduct - sumTax;
      }
    });
    if (total === 0) {
      this.item = false;
    }
    this.newItemEvent.emit(total);
    this.subTotal.emit(sumAllProduct);
    this.totalBill.emit(sumsaletax);
    this.totalBill.emit(sum);
  }

  promoCodeSale() {
    let total = 0;
    let sumItem = 0;
    let sumAllProduct = 0;
    let sumTax = 0;
    let sum = 0;
    // let sumSale = 0;
    const tax = 10;
    this.products.map(item => {
      total += item.quantity;
      sumItem = item.quantity * item.price;
      sumAllProduct += sumItem;
      if (tax > 0) {
        sumTax = sumAllProduct * tax / 100;
        sum = sumAllProduct - sumTax;
      }
    });

    let sumSale = 0;
    let sumsaletax = 0;
    this.promoCode.forEach((cod) => {
      if (this.proCode === cod.cd) {
        sumSale = sumAllProduct - cod.sale;
        sumsaletax = sumSale - sumTax;
        this.totalBill.emit(sumsaletax);
      } else {
        this.totalBill.emit(sum);
      }
    });
  }
}

  // reset(id: number) {
  //    this.products.map(data => {
  //     if (data.id === id) {
  //       data.quantity = 0;
  //     }
  //     this.newItemEvent.emit(data.quantity);
  //   });
  // }


