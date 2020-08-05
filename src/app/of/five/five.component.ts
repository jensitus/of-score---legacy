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
  unknown = 'unknown';
  isEnabled: boolean;

  constructor() {
  }

  ngOnInit() {
    this.isEnabled = false;
    if (localStorage.getItem('neurology') === this.yes) {
      this.button = this.yes;
      this.isEnabled = true;
    } else if (localStorage.getItem('neurology') === this.no) {
      this.button = this.no;
      this.isEnabled = true;
    } else if (localStorage.getItem('neurology') === this.unknown) {
      this.button = this.unknown;
      this.isEnabled = true;
    }
  }

  select(button) {
    switch (button) {
      case 'yes': {
        this.button = this.yes;
        this.neurology = this.yes;
        localStorage.setItem(OfScore.FIVE, '2');
        break;
      }
      case 'no': {
        this.button = this.no;
        this.neurology = this.no;
        localStorage.setItem(OfScore.FIVE, '0');
        break;
      }
      case 'unknown': {
        this.button = this.unknown;
        this.neurology = this.unknown;
        localStorage.setItem(OfScore.FIVE, '0');
      }
    }
    this.isEnabled = true;
    localStorage.setItem('neurology', this.neurology);
  }

}
