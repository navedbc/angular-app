import { Product } from 'src/app/models/product';
import { MessagingService } from './../../../services/messaging.service';
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

  tart = [];

  constructor(private msg: MessagingService ) { }

  ngOnInit() {

    this.msg.getMesg().subscribe((product: Product) => (
     this.cart.push({id:product.id, name: product.name, qty: 10,price: 20})
    ));

  }

}
