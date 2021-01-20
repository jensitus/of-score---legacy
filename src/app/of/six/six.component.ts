import { Component, OnInit } from '@angular/core';
import {OfScore} from '../of-score.enum';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent implements OnInit {

  title = 'Possibility of mobilization';
  bg = 'primary';

  yes = '-1';
  no = '1';
  mobilization: string;
  isEnabled: boolean;
  next: string;
  unknown = '0';

  constructor() { }

  ngOnInit() {
    this.isEnabled = false;
    this.mobilization = localStorage.getItem('mobilization');
    this.next = 'next';
    if (this.mobilization != null) {
      this.isEnabled = true;
    }
  }

  select(mobilization) {
    this.mobilization = mobilization;
    switch (mobilization) {
      case 'yes': {
        localStorage.setItem(OfScore.SIX, this.yes);
        break;
      }
      case 'no': {
        localStorage.setItem(OfScore.SIX, this.no);
        break;
      }
      case 'unknown': {
        localStorage.setItem(OfScore.SIX, this.unknown);
        break;
      }
    }
    localStorage.setItem('mobilization', this.mobilization);
    this.isEnabled = true;
  }

}
