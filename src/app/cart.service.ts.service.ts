import { Injectable } from '@angular/core';
import { Iitems } from './items-list/Iitems';

@Injectable({
  providedIn: 'root'
})
export class CartServiceTsService {
  cart: Iitems[] = [];
  constructor() { }

  addToCart(obj: Iitems) {
    this.cart.push(obj);
  }

  getCart() {
    return this.cart;
  }

  lengthOfCart() {
    return this.cart.length;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }
}
