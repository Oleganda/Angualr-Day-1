import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent {

  trips: { img: any; destination: string; duration: number; description: string; price: number }[] = [{
    img: "assets/photos/photo1.jpg",
    destination: "Beijing",
    duration: 5,
    description: "Explore Beijing with professional tour guide",
    price: 900
  },
  {
    img: "assets/photos/photo2.jpg",
    destination: "Ba Da Lin Great Wall Tripp",
    duration: 2,
    description: "Day excursion and sunset on the Great Wall",
    price: 150
  }, {
    img: "assets/photos/photo3.jpg",
    destination: "Shanghai",
    duration: 5,
    description: "Explore Shanghai with professional tour guide",
    price: 1000
  }, {
    img: "assets/photos/photo9.jpg",
    destination: "Xian",
    duration: 3,
    description: "Explore Xian with professional tour guide",
    price: 250
  }, {
    img: "assets/photos/photo5.jpg",
    destination: "Chinese Villages",
    duration: 5,
    description: "Explore hidden Chinese spots and visit places, where noone was",
    price: 600
  }, {
    img: "assets/photos/photo6.jpg",
    destination: "Beijing",
    duration: 5,
    description: "Explore Beijing with professional tour guide",
    price: 500
  },]



  newTrip = new FormGroup({
    img: new FormControl(''),
    destination: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.newTrip.valid) {
      let result: any = this.newTrip.value;
      this.trips.push(result);
      console.log(this.newTrip.value);
      this.newTrip.reset();

    }
  }
}
