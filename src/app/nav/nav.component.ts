import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  title = 'navbar';

  counter: number = 0;

  countClick() {
    this.counter = this.counter + 10;
  }

}
