import { ChangeDetectionStrategy, Component } from '@angular/core';



@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFormComponent {

}

