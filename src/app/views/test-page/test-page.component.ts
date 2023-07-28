import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent implements OnInit {

  count = 11;

  showNextButton = false;

  currentIndex$ = new BehaviorSubject(0);

  data = [
    {
      image: '../../../assets/images/image1.png',
      explanation: '1.What are the rules about warning triangle, in this situation?',
      options: [
        {
          question: 'A warning triangle has to be placed 30 meters from the car.',
          answer: true,
        },
        {
          question: 'A warning triangle has to be placed 60 meters from the car.',
          answer: false,
        },
        {
          question: 'A warning triangle has to be placed 80 meters from the car.',
          answer: false,
        },
        {
          question: 'A warning triangle has to be placed 100 meters from the car.',
          answer: false,
        }
      ]
    },
    {
      image: '../../../assets/images/image1.png',
      explanation: '2.What are the rules about warning triangle, in this situation?',
      options: [
        {
          question: 'A warning triangle has to be placed 30 meters from the car.',
          answer: true,
        },
        {
          question: 'A warning triangle has to be placed 60 meters from the car.',
          answer: false,
        },
        {
          question: 'A warning triangle has to be placed 80 meters from the car.',
          answer: false,
        },
        {
          question: 'A warning triangle has to be placed 100 meters from the car.',
          answer: false,
        }
      ]
    },
  ];

  currentData = this.data[this.currentIndex$.getValue()];

  moveForward(){
    if(this.count < this.currentData.options.length - 1){
      this.count = this.count + 1;
    }
    else {
      this.showNextButton = true;
    }
  }

  nextQuestion(){
    console.log(this.currentIndex$.getValue());
    this.currentIndex$.next(this.currentIndex$.getValue() + 1);
    console.log(this.currentIndex$.getValue());
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.count = 10;
    }, 5000)
  }
}

