import { Product } from './../models/product';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: Product[]= [
   new Product(10, 'iphone x', 'worlds best phone',''),
   new Product(10, 'iphone x', 'worlds best phone',''),
   new Product(10,'iphone x', 'worlds best phone','')
  ]

  constructor() { }
}
