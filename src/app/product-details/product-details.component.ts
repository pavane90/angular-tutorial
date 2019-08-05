import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    //ActivatedRoute은 Angular 라우터가 컴포넌트를 로드할 때 사용한 라우팅 규칙을 의미합니다. 이 객체에는 현재 사용된 라우팅 규칙, 라우팅 변수 등의 데이터가 들어있습니다.
  ) { }

  ngOnInit() {
    //라우팅 변수를 구독(subscribe) 한 후에 옵저버에서 productId를 참조합니다.
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }

}