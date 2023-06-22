import { Component, OnInit, DoCheck } from '@angular/core';
import { Iitems } from '../items-list/Iitems';
import { ActivatedRoute, Params } from '@angular/router';
import { items } from '../items-list/items';
import { CartServiceTsService } from '../cart.service.ts.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, DoCheck {
  obj: Iitems = {} as Iitems;
  index: number = 0;
  number: number = 0;
  constructor(private route: ActivatedRoute, private cartService: CartServiceTsService) {

  }

  addToCart() {
    alert("You added an item");
    this.cartService.addToCart(this.obj);

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['indexFromRouting'];
      this.obj = items[this.index];
    });
  }

  ngDoCheck(): void {
    this.number = this.cartService.lengthOfCart()
  }


}

