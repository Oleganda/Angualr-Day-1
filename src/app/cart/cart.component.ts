import { Component, OnInit, DoCheck } from '@angular/core';
import { Iitems } from '../items-list/Iitems';
import { CartServiceTsService } from '../cart.service.ts.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck {

  cart: Iitems[] = [];
  number: number = 0;

  constructor(private cartService: CartServiceTsService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();

  }

  ngDoCheck(): void {
    this.number = this.cartService.lengthOfCart();
  }

}
