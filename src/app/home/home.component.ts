import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'OF Score';
  bg: string;
  home = true;

  constructor() { }

  ngOnInit() {
    this.bg = 'spine-back';
    localStorage.clear();
  }

}
