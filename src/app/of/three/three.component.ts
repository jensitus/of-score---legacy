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
    this.button = localStorage.getItem(OfScore.THREE);
  }

  select(button) {
    console.log(button);
    switch (button) {
      case 'yes': {
        this.button = this.yes;
        localStorage.setItem(OfScore.THREE, this.yes);
        break;
      }
      case 'no': {
        this.button = this.no;
        localStorage.setItem(OfScore.THREE, this.no);
        break;
      }
    }

  }

}
