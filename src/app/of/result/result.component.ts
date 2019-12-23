import {Component, OnInit} from '@angular/core';
import {OfScore} from '../of-score.enum';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  title = 'result';
  heading = 'conclusion';
  bg = 'primary';

  result = 0;
  morphology: number;
  boneDensity: number;
  sintering: number;
  pain: number;
  neurology: number;
  mobilization: number;
  stateOfHealth: number;

  resultExplanation: string;

  constructor() {
  }

  ngOnInit() {
    this.getResult();
    this.getSingleResults();
  }

  private getResult() {
    this.result = this.result
      + Number(localStorage.getItem(OfScore.ONE))
      + Number(localStorage.getItem(OfScore.TWO))
      + Number(localStorage.getItem(OfScore.THREE))
      + Number(localStorage.getItem(OfScore.FOUR))
      + Number(localStorage.getItem(OfScore.FIVE))
      + Number(localStorage.getItem(OfScore.SIX))
      + Number(localStorage.getItem(OfScore.SEVEN));

    this.getResultExplanation(this.result);
  }

  private getSingleResults() {
    this.morphology = Number(localStorage.getItem(OfScore.ONE));
    this.boneDensity = Number(localStorage.getItem(OfScore.TWO));
    this.sintering = Number(localStorage.getItem(OfScore.THREE));
    this.pain = Number(localStorage.getItem(OfScore.FOUR));
    this.neurology = Number(localStorage.getItem(OfScore.FIVE));
    this.mobilization = Number(localStorage.getItem(OfScore.SIX));
    this.stateOfHealth = Number(localStorage.getItem(OfScore.SEVEN));
  }

  private getResultExplanation(result) {
    console.log(result);
    if (result <= 5) {
      this.resultExplanation = '0 - 5 points means a conservative therapy is highly recommended';
    } else if (result === 6) {
      this.resultExplanation = 'A surgery indication could be an idea but it is not really mandatory';
    } else if (result > 6) {
      this.resultExplanation = 'Surgery!';
    }
  }

}
