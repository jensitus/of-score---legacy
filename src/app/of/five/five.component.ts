import {Component, OnInit} from '@angular/core';
import {OfScore} from '../of-score.enum';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {

  title = 'neurology';
  bg = 'warning';

  button: string;
  neurology: string;

  yes = 'yes';
  no = 'no';

  constructor() {
  }

  ngOnInit() {
    if (localStorage.getItem(OfScore.FIVE) === '2') {
      this.button = this.yes;
    } else {
      this.button = this.no;
    }
  }

  select(button) {
    switch (button) {
      case 'yes': {
        this.button = this.yes;
        this.neurology = '2';
        localStorage.setItem(OfScore.FIVE, this.neurology);
        break;
      }
      case 'no': {
        this.button = this.no;
        this.neurology = '0';
        localStorage.setItem(OfScore.FIVE, this.neurology);
        break;
      }
    }

  }

}
