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
  button: string;

  constructor() { }

  ngOnInit() {
    this.title = 'sintering';
    this.bg = 'light';
    if (localStorage.getItem(OfScore.THREE) === '1') {
      this.button = this.yes;
    } else if (localStorage.getItem(OfScore.THREE) === '-1') {
      this.button = this.no;
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
    }

  }

}
