import {Component, OnInit} from '@angular/core';
import {OfScore} from '../of-score.enum';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  title: string;
  bg: string;

  of1 = '2';
  of2 = '4';
  of3 = '6';
  of4 = '8';
  of5 = '10';

  buttonOne: boolean;
  buttonTwo: boolean;
  buttonThree: boolean;
  buttonFour: boolean;
  buttonFive: boolean;

  constructor() {
  }

  ngOnInit() {
    this.title = 'Morphology';
    this.bg = 'spine-back';
    this.buttonOne = true;
  }

  select(button) {
    switch (button) {
      case 'one': {
        this.buttonOne = true;
        this.buttonTwo = false;
        this.buttonThree = false;
        this.buttonFour = false;
        this.buttonFive = false;
        localStorage.setItem(OfScore.ONE, this.of1);
        break;
      }
      case 'two': {
        this.buttonOne = false;
        this.buttonTwo = true;
        this.buttonThree = false;
        this.buttonFour = false;
        this.buttonFive = false;
        localStorage.setItem(OfScore.ONE, this.of2);
        break;
      }
      case 'three': {
        this.buttonOne = false;
        this.buttonTwo = false;
        this.buttonThree = true;
        this.buttonFour = false;
        this.buttonFive = false;
        localStorage.setItem(OfScore.ONE, this.of3);
        break;
      }
      case 'four': {
        this.buttonOne = false;
        this.buttonTwo = false;
        this.buttonThree = false;
        this.buttonFour = true;
        this.buttonFive = false;
        localStorage.setItem(OfScore.ONE, this.of4);
        break;
      }
      case 'five': {
        this.buttonOne = false;
        this.buttonTwo = false;
        this.buttonThree = false;
        this.buttonFour = false;
        this.buttonFive = true;
        localStorage.setItem(OfScore.ONE, this.of5);
        break;
      }
    }
  }

}
