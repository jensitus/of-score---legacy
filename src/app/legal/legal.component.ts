import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css']
})
export class LegalComponent implements OnInit {

  title = 'legal';
  bg = 'success';
  heading = 'impressum';

  constructor() { }

  ngOnInit() {
  }

}
