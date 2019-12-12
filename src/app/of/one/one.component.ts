import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  title: string;
  bg: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Morphology';
    this.bg = 'spine-back';
  }

}
