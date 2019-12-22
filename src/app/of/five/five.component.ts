import { Component, OnInit } from '@angular/core';
import {OfScore} from '../of-score.enum';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {

  title = 'neurology';
  bg = 'warning';

  button: boolean;
  neurology: string;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem(OfScore.FIVE) === '2') {
      this.button = true;
    } else {
      this.button = false;
    }
  }

  select() {
    this.button = !this.button;
    if (this.button) {
      this.neurology = '2';
    } else {
      this.neurology = '0';
    }
    localStorage.setItem(OfScore.FIVE, this.neurology);
  }

}
