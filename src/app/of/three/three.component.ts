import { Component, OnInit } from '@angular/core';
import {OfScore} from '../of-score.enum';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  title: string;
  bg: string;

  yes = 'yes';
  no = 'no';
  unknown = 'unknown';
  button: string;
  isEnabled: boolean;

  constructor() { }

  ngOnInit() {
    this.isEnabled = false;
    this.title = 'sintering';
    this.bg = 'light';
    if (localStorage.getItem(OfScore.THREE) === '1') {
      this.button = this.yes;
      this.isEnabled = true;
    } else if (localStorage.getItem(OfScore.THREE) === '-1') {
      this.button = this.no;
      this.isEnabled = true;
    } else if (localStorage.getItem(OfScore.THREE) === '0') {
      this.button = this.unknown;
      this.isEnabled = true;
    }
  }

  select(button) {
    switch (button) {
      case 'yes': {
        this.button = this.yes;
        localStorage.setItem(OfScore.THREE, '1');
        break;
      }
      case 'no': {
        this.button = this.no;
        localStorage.setItem(OfScore.THREE, '-1');
        break;
      }
      case 'unknown': {
        this.button = this.unknown;
        localStorage.setItem(OfScore.THREE, '0');
        break;
      }
    }
    this.isEnabled = true;
  }

}
