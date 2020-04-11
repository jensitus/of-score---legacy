import { Component, OnInit } from '@angular/core';
import {OfScore} from '../of-score.enum';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {

  title: string;
  bg: string;

  vasMoreThanFive = '1';
  vasLessThanFive = '-1';
  button: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Pain';
    this.bg = 'warning';
    this.button = localStorage.getItem(OfScore.FOUR);
  }

  select(button) {
    switch (button) {
      case 'more': {
        this.button = this.vasMoreThanFive;
        localStorage.setItem(OfScore.FOUR, this.vasMoreThanFive);
        break;
      }
      case 'less': {
        this.button = this.vasLessThanFive;
        localStorage.setItem(OfScore.FOUR, this.vasLessThanFive);
        break;
      }
    }
  }

}
