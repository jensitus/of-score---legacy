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
    this.neurology = localStorage.getItem('neurology');
    if (this.neurology != null) {
      this.isEnabled = true;
    } else {
      this.isEnabled = false;
    }
  }

  select(button) {
    switch (button) {
      case 'yes': {
        this.neurology = this.yes;
        localStorage.setItem(OfScore.FIVE, '2');
        break;
      }
      case 'no': {
        this.neurology = this.no;
        localStorage.setItem(OfScore.FIVE, '0');
        break;
      }
      case 'unknown': {
        this.neurology = this.unknown;
        localStorage.setItem(OfScore.FIVE, '0');
      }
    }
    this.isEnabled = true;
    localStorage.setItem('neurology', this.neurology);
  }

}
