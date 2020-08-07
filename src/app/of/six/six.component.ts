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
  unknown = 'unknown';

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
        localStorage.setItem(OfScore.SIX, '1');
        break;
      }
      case 'no': {
        localStorage.setItem(OfScore.SIX, '0');
        break;
      }
      case 'unknown': {
        localStorage.setItem(OfScore.SIX, '0');
        break;
      }
    }
    localStorage.setItem('mobilization', this.mobilization);
    this.isEnabled = true;
  }

}
