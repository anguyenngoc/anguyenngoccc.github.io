import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html',
  styleUrls: ['./cart-footer.component.css']
})
export class CartFooterComponent implements OnInit {
  @Input() bill;
  @Input() subBill;
  @Output() promoCode = new EventEmitter<any>();

  public code;

  constructor() {

  }

  ngOnInit() {
  }

  getCode() {
    this.promoCode.emit(this.code);
    confirm('xac nhan code');
  }
}
