import { Component } from '@angular/core';



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveFormComponent  {
  name='sudhan';

  countries = ['Nepal', 'Denmark', 'England', 'Norway', 'USA'];

  onSubmit(form: any){
    console.log(form.value);
    form.reset();
  }
}

