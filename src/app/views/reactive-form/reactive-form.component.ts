import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveFormComponent  {
  reactiveForm = new FormGroup({
    name: new FormControl('null', Validators.required),
    age: new FormControl(0),
    gender: new FormControl(),
    details: new FormControl(),
    married: new FormControl(),
    country: new FormControl(),
  })

  countries = ['Nepal', 'Denmark', 'England', 'Norway', 'USA'];

  onSubmit(){
    console.log(this.reactiveForm.value);
    this.reactiveForm.reset();
  }
}

