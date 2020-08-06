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
  unknown = 'unknown';
  button: string;
  isEnabled: boolean;
  vas: string;

  constructor() { }

  ngOnInit() {
    this.isEnabled = false;
    this.title = 'Pain';
    this.bg = 'warning';
    this.vas = localStorage.getItem('vas');
    if (this.vas != null) {
      this.isEnabled = true;
    }
  }

  select(vas) {
    this.vas = vas;
    switch (vas) {
      case 'more': {
        localStorage.setItem(OfScore.FOUR, '1');
        break;
      }
      case 'less': {
        localStorage.setItem(OfScore.FOUR, '0');
        break;
      }
      case 'unknown': {
        localStorage.setItem(OfScore.FOUR, '0');
        break;
      }
    }
    localStorage.setItem('vas', this.vas);
    this.isEnabled = true;
  }

}
