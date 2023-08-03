import { Component } from '@angular/core';



@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateFormComponent  {
  name='sudhan';

  countries = ['Nepal', 'Denmark', 'England', 'Norway', 'USA'];

  onSubmit(form: any){
    console.log(form.value);
    form.reset();
  }
}

