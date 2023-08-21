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

  message = '';

  pushItem(){
    this.message += ' -> ' + 'push - new';
    this.myArray.push('new');
  }
  popItem(){
    this.message += ' -> ' + 'pop';
    this.myArray.pop();
  }
  unShiftItem(){
    this.message += ' -> ' + 'unshift';
    this.myArray.shift();
  }
  shiftItem(){
    this.message += ' -> ' + 'shift - new';
    this.myArray.unshift('new');
  }
  splice(){
    this.message += ' -> ' + 'splice(1,4,"f")';
    this.myArray.splice(1,4, "f");
  }
  slice(){
    this.message += ' -> ' + 'splice(1,4)';
    this.originalArray = [...this.myArray.slice(1,4)];
  }
}

