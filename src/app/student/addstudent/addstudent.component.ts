import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent {
  model: any = {};

  constructor() {

  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.model)
  }
}
