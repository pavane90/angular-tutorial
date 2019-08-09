import { Component, OnInit } from '@angular/core';
//FormBuilder는 ReactiveFormsModule이 제공하는 서비스입니다. 이 모듈은 app.module.ts 파일에서 정의하는 AppModule에 이미 추가되어 있습니다.
import { FormBuilder } from '@angular/forms';
import { CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    //CartService 의존성 주입
  ) {
    this.items = this.cartService.getItems();
    //checkoutForm 프로퍼티에 할당되는 폼 모델에 선언
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

  onSubmit(customerData) {
  // 주문 로직은 여기에 구현합니다.
  console.warn('Your order has been submitted', customerData);

  this.items = this.cartService.clearCart();
  this.checkoutForm.reset();
  }

  ngOnInit() {
  }

}