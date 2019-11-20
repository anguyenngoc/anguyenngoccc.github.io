import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBodyComponent } from './cart-body.component';

describe('CartBodyComponent', () => {
  let component: CartBodyComponent;
  let fixture: ComponentFixture<CartBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
