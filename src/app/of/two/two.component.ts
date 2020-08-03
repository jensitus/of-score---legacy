import { Component, OnInit } from '@angular/core';
import {OfScore} from '../of-score.enum';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  T_SCORE = 'tScore';

  title = 'bone density';
  bg = 'secondary';
  button: boolean;
  tScore: string;

  constructor() {
  }

  ngOnInit() {
    if (localStorage.getItem(this.T_SCORE) != null) {
      this.tScore = localStorage.getItem((this.T_SCORE));
    }
  }

  select(tScore) {
    this.tScore = tScore;
    localStorage.setItem(this.T_SCORE, this.tScore);
    if (this.tScore === '1' || this.tScore === '0') {
      localStorage.setItem(OfScore.TWO, this.tScore);
    } else if (this.tScore === 'unknown') {
      localStorage.setItem(OfScore.TWO, '0');
    }
  }

}
