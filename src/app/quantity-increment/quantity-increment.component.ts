import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})
export class QuantityIncrementComponent implements OnInit {

  quantity = 0;
  minusDisabled = true;  

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.quantity++;
    this.minusDisabled = false;
  }

  decrement(){
    this.quantity--;
    this.minusDisabled = this.quantity === 0;
  }
}
