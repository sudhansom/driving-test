import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent implements OnInit {

  count = -1;

  showNextButton = false;

  currentIndex = 0;

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

  currentData = this.data[this.currentIndex];

  moveForward(){
    if(this.count < this.currentData.options.length - 1){
      this.count = this.count + 1;
    }
    else {
      this.showNextButton = true;
    }
  }

  nextQuestion(){
    this.currentIndex = this.currentIndex + 1;
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.count = 0;
    }, 5000)
  }

}

