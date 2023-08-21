import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { PlatformLocation } from '@angular/common';

import { IData } from 'src/app/types';
import { data } from 'src/app/data';

@Component({
  selector: 'app-array-methods.',
  templateUrl: './array-methods.component.html',
  styleUrls: ['./array-methods.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrayMethodsComponent {
  myArray: string[] = ['a', 'b', 'c', 'd', 'e'];
  originalArray: string[] = [...this.myArray];

  pushItem(){
    this.myArray.push('new');
  }
}

