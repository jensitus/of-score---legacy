import { Component, OnInit } from '@angular/core';
import {OfScore} from '../of-score.enum';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  title: string;
  bg: string;
  button: string;
  ts: boolean;
  tScore: string;
  constructor() { }

  ngOnInit() {
    this.title = 'bone density';
    this.bg = 'secondary';
    if (localStorage.getItem(OfScore.TWO) == null) {
      this.tScore = '0';
      localStorage.setItem(OfScore.TWO, this.tScore);
    } else if (localStorage.getItem(OfScore.TWO) === '1') {
      this.ts = true;
    } else {
      this.ts = false;
    }
  }

  select() {
    this.ts = !this.ts;
    if (this.ts) {
      this.tScore = '1';
    } else {
      this.tScore = '0';
    }
    localStorage.setItem(OfScore.TWO, this.tScore);
  }

}
