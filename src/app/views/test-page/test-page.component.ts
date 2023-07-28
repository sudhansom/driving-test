import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent implements OnInit {

  currentUtterance: SpeechSynthesisUtterance | null = null;

  count = -1;
  currentData: any;

  showNextButton = false;

  currentIndex = 0;

  answers = [];

  data = [
    {
      image: '../../../assets/images/image1.png',
      explanation: ' What are the rules about warning triangle, in this situation?',
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
      image: '../../../assets/images/image2.png',
      explanation: ' You are staying by the curb and would like to set off. What will you do?',
      options: [
        {
          question: 'I carefully set off straight away?',
          answer: true,
        },
        {
          question: 'I make orientation in the blind angles, behind on my left?',
          answer: true,
        },
        {
          question: 'If there is no traffic, I will set off?',
          answer: true,
        },
        {
          question: 'I wait a bit more to set off?',
          answer: false,
        }
      ]
    },
  ];

  fetchData(){
  this.currentData = this.data[this.currentIndex];
  const timerId = setTimeout(()=>{
    this.sayQuestion();
    clearTimeout(timerId);
  }, 100)
  }


  moveForward(){
    if(this.count < this.currentData.options.length - 1){
      this.count = this.count + 1;
      this.stopSpeak();
      this.speak(this.currentData.options[this.count].question);
    }
    else {
      this.showNextButton = true;
    }
  }

  nextQuestion(){
    this.count = 0;
    this.showNextButton = false;
    if(this.currentIndex < this.data.length){
      this.currentIndex = this.currentIndex + 1;
      this.fetchData();
    }
  }

  ngOnInit(): void {
    this.fetchData();
  }
  sayQuestion(){
    this.speak(this.currentData.explanation);
    const timerId = setTimeout(()=>{
      this.count = 0;
      this.speak(this.currentData.options[this.count].question);
      clearTimeout(timerId);
    }, 5000)
  }


  speak(textToSpeak: string): void {
    if ('speechSynthesis' in window) {
      const speechSynthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = .85;
      speechSynthesis.speak(utterance);
      this.currentUtterance = utterance;

    } else {
      alert('Speech synthesis is not supported in this browser.');
    }
  }
  stopSpeak(): void {
    if ('speechSynthesis' in window) {
      const speechSynthesis = window.speechSynthesis;
      speechSynthesis.cancel(); // Cancel the ongoing speech
      this.currentUtterance = null;
    }
  }

}

