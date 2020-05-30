import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart = [
    {id: 10, name: 'iphone x',qty: 3, price: 10},
    {id: 10, name: 'iphone x',qty: 3, price: 10},
    {id: 10, name: 'iphone x',qty: 3, price: 10}
  ];

  constructor() { }

  ngOnInit() {
  }

}
