import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { PlatformLocation } from '@angular/common';

import { IData } from 'src/app/types';
import { data } from 'src/app/data';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent implements OnInit, OnDestroy {

  private clearPopListener = this.platformLocation.onPopState(() => {
    this.stopSpeak();
  });

  Math: any;

  data = data;
  time = signal(1500);

  currentUtterance: SpeechSynthesisUtterance | null = null;

  wrongAnswers = 0;
  wrong = false;

  timerId: any;

  finished = false;


  count = -1;
  currentData: any;

  allAnswers: IData[] = [];

  showNextButton = false;

  currentIndex = 0;

  answers = [];

  fetchData(){
    this.currentData = this.data[this.currentIndex];
    this.sayQuestion();
  }


  moveForward(e:any, i: number){
    clearTimeout(this.timerId);
    this.currentData.options[i].givenAnswer = e.target.value==='true'? true : false;
    if(i < this.currentData.options.length - 1){
      if(this.count < i + 1){
        this.count = i + 1;
        this.stopSpeak();
        this.speak(this.currentData.options[this.count].question);
      }
    }
    else {
      this.showNextButton = true;
    }
  }

  nextQuestion(){
    clearTimeout(this.timerId);
    this.stopSpeak();
    this.allAnswers.push(this.currentData);
    this.count = 0;
    this.showNextButton = false;
    if(this.currentIndex < this.data.length - 1){
      this.currentIndex = this.currentIndex + 1;
      this.fetchData();
    }
    else{
      this.allAnswers.forEach(item => {
        item.options.forEach(each => {
          if(each.answer !== each.givenAnswer){
            this.wrong = true;
          }
        })
        if(this.wrong){
          this.wrongAnswers += 1;
          this.wrong = false;
        }
      })
      console.log('right answers:', this.allAnswers.length - this.wrongAnswers);
      this.finished = true;
    }
  }

  sayQuestion(){
    this.speak(this.currentData?.explanation);
    this.timerId = setTimeout(()=>{
      this.count = 0;
      this.speak(this.currentData.options[this.count].question);
      clearTimeout(this.timerId);
    }, 2000)
  }


  speak(textToSpeak: string): void {
    if ('speechSynthesis' in window) {
      const speechSynthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = .80;
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
  constructor(private platformLocation: PlatformLocation){
    this.Math = Math;
  }

  ngOnInit(): void {
    this.fetchData();

    setInterval(()=>{
      if(!this.finished){
        this.time.set(this.time() - 1);
      }
    }, 1000)
  }

  ngOnDestroy(): void {
    this.clearPopListener();
  }

}

