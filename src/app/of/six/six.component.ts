import { Component, OnInit } from '@angular/core';
import {OfScore} from '../of-score.enum';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent implements OnInit {

  title = 'Mobilization';
  bg = 'primary';

  yes = 'yes';
  no = 'no';
  button: string;

  constructor() { }

  ngOnInit() {
    this.button = localStorage.getItem(OfScore.SIX);
  }

  select(button) {
    switch (button) {
      case 'yes': {
        this.button = this.yes;
        localStorage.setItem(OfScore.SIX, this.yes);
        break;
      }
      case 'no': {
        this.button = this.no;
        localStorage.setItem(OfScore.SIX, this.no);
        break;
      }
    }
  }

}
