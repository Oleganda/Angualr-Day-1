import { Component, DoCheck } from '@angular/core';
import { Iitems } from './Iitems';
import { items } from './items';
import { CartServiceTsService } from '../cart.service.ts.service';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements DoCheck {
  items: Iitems[] = items;
  number: number = 0;
  constructor(private CS: CartServiceTsService) {

  }
  ngDoCheck(): void {
    this.number = this.CS.lengthOfCart();
  }
}
