import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type IData = {
  image: string,
  explanation: string,
  options: {
    question: string,
    answer: boolean,
    givenAnswer?: boolean,
    reason?: string
  }[]
}

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent implements OnInit {

  currentUtterance: SpeechSynthesisUtterance | null = null;

  wrongAnswers = 0;

  finished = true;


  count = -1;
  currentData: any;

  allAnswers: IData[] = [
    {
      image: '../../../assets/images/image1.png',
      explanation: ' What are the rules about warning triangle, in this situation?',
      options: [
        {
          question: 'A warning triangle has to be placed 30 meters from the car.',
          answer: true,
          givenAnswer: true,
          reason: 'because ...........'
        },
        {
          question: 'A warning triangle has to be placed 60 meters from the car.',
          answer: false,
          givenAnswer: false,
          reason: 'because ...........'
        },
        {
          question: 'A warning triangle has to be placed 80 meters from the car.',
          answer: false,
          givenAnswer: false,
          reason: 'because ...........'
        },
        {
          question: 'A warning triangle has to be placed 100 meters from the car.',
          answer: false,
          givenAnswer: false,
          reason: 'because ...........'
        }
      ]
    },
    // {
    //   image: '../../../assets/images/image3.png',
    //   explanation: ' You are driving 30 km/h. How will you continue?',
    //   options: [
    //     {
    //       question: 'I pay special attention to the road work?',
    //       answer: true,

    //     },
    //     {
    //       question: 'I continue with the same or almost the same speed of 30 km/h?',
    //       answer: false,
    //     },
    //     {
    //       question: 'I break?',
    //       answer: true,
    //     },
    //     {
    //       question: 'I pay special attention to the white road markings?',
    //       answer: false,
    //     }
    //   ]
    // },
    // {
    //   image: '../../../assets/images/image2.png',
    //   explanation: ' You are staying by the curb and would like to set off. What will you do?',
    //   options: [
    //     {
    //       question: 'I carefully set off straight away?',
    //       answer: true,
    //     },
    //     {
    //       question: 'I make orientation in the blind angles, behind on my left?',
    //       answer: true,
    //     },
    //     {
    //       question: 'If there is no traffic, I will set off?',
    //       answer: true,
    //     },
    //     {
    //       question: 'I wait a bit more to set off?',
    //       answer: false,
    //     }
    //   ]
    // },
    {
      image: '../../../assets/images/image4.png',
      explanation: ' You are driving at about 70 km/h. There is no traffic from behind. How will you continue?',
      options: [
        {
          question: 'I cross broken lines in the middle of the road to flatten the bend?',
          answer: false,
          givenAnswer: false,
          reason: 'because ...........'
        },
        {
          question: 'I move close to the right edge of the road?',
          answer: false,
          givenAnswer: false,
          reason: 'because ...........'
        },
        {
          question: 'I stay in the middle of my lane?',
          answer: true,
          givenAnswer: false,
          reason: 'because ...........'
        },
        {
          question: 'I slow down?',
          answer: true,
          givenAnswer: false,
          reason: 'because ...........'
        }
      ]
    },
    {
      image: '../../../assets/images/image5.png',
      explanation: ' You are driving at about 70 km/h. How will you continue?',
      options: [
        {
          question: 'I continue at the same speed of 70 km/h?',
          answer: false,
          givenAnswer: false,
          reason: 'because ...........'
        },
        {
          question: 'I slow down and continue at the speed of about 50 km/h?',
          answer: true,
          givenAnswer: false,
          reason: 'because ...........'
        },
        {
          question: 'I pay special attention to the road surroundings? (condition of the road)',
          answer: true,
          givenAnswer: false,
          reason: 'because ...........'
        },
        {
          question: 'I pay special attention to the course of the road?',
          answer: true,
          givenAnswer: false,
          reason: 'because ...........'
        }
      ]
    },
  ];

  showNextButton = false;

  currentIndex = 0;

  answers = [];

  data: IData[] = [
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
    // {
    //   image: '../../../assets/images/image3.png',
    //   explanation: ' You are driving 30 km/h. How will you continue?',
    //   options: [
    //     {
    //       question: 'I pay special attention to the road work?',
    //       answer: true,
    //     },
    //     {
    //       question: 'I continue with the same or almost the same speed of 30 km/h?',
    //       answer: false,
    //     },
    //     {
    //       question: 'I break?',
    //       answer: true,
    //     },
    //     {
    //       question: 'I pay special attention to the white road markings?',
    //       answer: false,
    //     }
    //   ]
    // },
    // {
    //   image: '../../../assets/images/image2.png',
    //   explanation: ' You are staying by the curb and would like to set off. What will you do?',
    //   options: [
    //     {
    //       question: 'I carefully set off straight away?',
    //       answer: true,
    //     },
    //     {
    //       question: 'I make orientation in the blind angles, behind on my left?',
    //       answer: true,
    //     },
    //     {
    //       question: 'If there is no traffic, I will set off?',
    //       answer: true,
    //     },
    //     {
    //       question: 'I wait a bit more to set off?',
    //       answer: false,
    //     }
    //   ]
    // },
    {
      image: '../../../assets/images/image4.png',
      explanation: ' You are driving at about 70 km/h. There is no traffic from behind. How will you continue?',
      options: [
        {
          question: 'I cross broken lines in the middle of the road to flatten the bend?',
          answer: false,
        },
        {
          question: 'I move close to the right edge of the road?',
          answer: false,
        },
        {
          question: 'I stay in the middle of my lane?',
          answer: true,
        },
        {
          question: 'I slow down?',
          answer: true,
        }
      ]
    },
    {
      image: '../../../assets/images/image5.png',
      explanation: ' You are driving at about 70 km/h. How will you continue?',
      options: [
        {
          question: 'I continue at the same speed of 70 km/h?',
          answer: false,
        },
        {
          question: 'I slow down and continue at the speed of about 50 km/h?',
          answer: true,
        },
        {
          question: 'I pay special attention to the road surroundings? (condition of the road)',
          answer: true,
        },
        {
          question: 'I pay special attention to the course of the road?',
          answer: true,
        }
      ]
    },
  ];

  fetchData(){
  this.currentData = this.data[this.currentIndex];
  this.sayQuestion();
  }


  moveForward(e:any, i: number){
    this.currentData.options[i].givenAnswer = e.target.value==='true'? true : false;
    console.log(this.currentData);
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
            this.wrongAnswers += 1;
          }

        })
      })
      console.log('right answers:', this.allAnswers.length - this.wrongAnswers);
      this.finished = true;
    }
  }

  ngOnInit(): void {
    this.currentData = this.data[this.currentIndex];
    this.sayQuestion();
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

}

