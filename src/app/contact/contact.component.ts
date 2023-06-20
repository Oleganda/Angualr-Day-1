import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  info = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    email: new FormControl('', Validators.required),
  });


  onSubmit() {
    if (this.info.valid) {
      alert("Thank you! We will contact you as soon as possible!")
    }
    else {
      alert("Please fill required information")
    }
    this.info.reset();
  }
}

