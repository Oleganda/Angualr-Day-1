import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newtrip',
  templateUrl: './newtrip.component.html',
  styleUrls: ['./newtrip.component.css']
})
export class NewtripComponent {

  info2 = new FormGroup({
    userName: new FormControl('', Validators.required),
    price: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required),
  });


  onSubmit() {
    if (this.info2.valid) {

    }
    console.log(this.info2.value);

  }

}
