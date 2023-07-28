import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent implements OnInit {

  count = -1;
  currentData: any;

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

  fetchData(){
  this.currentData = this.data[this.currentIndex];
  setTimeout(()=>{
    this.sayQuestion();
  }, 100)
  }


  moveForward(){
    if(this.count < this.currentData.options.length - 1){
      this.count = this.count + 1;
      this.speak(this.currentData.options[this.count].question);
    }
    else {
      this.showNextButton = true;
    }
  }

  nextQuestion(){
    this.count = 0;
    this.showNextButton = false;
    this.currentIndex = this.currentIndex + 1;
    this.fetchData();
    this.sayQuestion();
  }

  ngOnInit(): void {
    this.fetchData();
  }
  sayQuestion(){
    this.speak(this.currentData.explanation);
  setTimeout(()=>{
    this.count = 0;
    this.speak(this.currentData.options[this.count].question);
  }, 5000)
  }


  speak(textToSpeak: string): void {
    if ('speechSynthesis' in window) {
      const speechSynthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      speechSynthesis.speak(utterance);
    } else {
      alert('Speech synthesis is not supported in this browser.');
    }
  }
}

