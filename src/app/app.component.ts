import { Component } from '@angular/core';
import { LISTPRODUCT } from './models/fake-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';

  public numberItems = 0;
  public subToal = 0;
  public bill = 0;
  public code;

  newItems(value) {
    this.numberItems = value;
  }
  getBill(value) {
    this.bill = value;
  }
  getSubTotal(value) {
    this.subToal = value;
  }

  getCode(value) {
    this.code = value;
  }

}
