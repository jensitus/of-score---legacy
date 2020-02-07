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
  description: string;

  of1 = '2';
  of2 = '4';
  of3 = '6';
  of4 = '8';
  of5 = '10';
  button: string;

  constructor() {
  }

  ngOnInit() {
    this.title = 'Morphology';
    this.bg = 'spine-back';
    this.button = localStorage.getItem(OfScore.ONE);
  }

  select(button) {
    switch (button) {
      case 'one': {
        this.button = this.of1;
        localStorage.setItem(OfScore.ONE, this.of1);
        break;
      }
      case 'two': {
        this.button = this.of2;
        localStorage.setItem(OfScore.ONE, this.of2);
        break;
      }
      case 'three': {
        this.button = this.of3;
        localStorage.setItem(OfScore.ONE, this.of3);
        break;
      }
      case 'four': {
        this.button = this.of4;
        localStorage.setItem(OfScore.ONE, this.of4);
        break;
      }
      case 'five': {
        this.button = this.of5;
        localStorage.setItem(OfScore.ONE, this.of5);
        break;
      }
    }
  }

}
