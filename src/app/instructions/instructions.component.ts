import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  instructionImageUrls;

  constructor() { }

  ngOnInit() {
    this.instructionImageUrls = [
      {
        image: '../ass',
        title: 'Chrome',
        instructions: 'click on Add seven-letter-Code to Home screen'
      },
      {
        image: '',
        title: 'Firefox',
        instructions: 'click on the small house icon with the "+" inside and then add to your Home screen'
      },
      {
        image: '',
        title: 'iPhone',
        instructions: 'click on the share button and then add to Home screen'
      }
    ];
  }

}
