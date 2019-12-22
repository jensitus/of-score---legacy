import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.css']
})
export class SevenComponent implements OnInit {

  // public static readonly ASA: string;
  ASA = 'asa';
  DEMENTIA = 'dementia';
  BMI = 'bmi';
  DEPENDENT = 'dependent';
  ANTICOAGULATION = 'anticoagulation';

  title = 'state of health';
  bg = 'success';

  asa: boolean;
  dementia: boolean;
  bmi: boolean;
  dependent: boolean;
  anticoagulation: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  select(button) {
    switch (button) {
      case 'asa': {
        this.asa = !this.asa;
        if (this.asa) {
          localStorage.setItem(this.ASA, 'true');
        } else {
          localStorage.setItem(this.ASA, 'false');
        }
        break;
      }
      case 'dementia': {
        this.dementia = !this.dementia;
        if (this.dementia) {
          localStorage.setItem(this.DEMENTIA, 'true');
        } else {
          localStorage.setItem(this.DEMENTIA, 'false');
        }
        break;
      }
      case 'bmi': {
        this.bmi = !this.bmi;
        if (this.bmi) {
          localStorage.setItem(this.BMI, 'true');
        } else {
          localStorage.setItem(this.BMI, 'false');
        }
        break;
      }
      case 'dependent': {
        this.dependent = !this.dependent;
        if (this.dependent) {
          localStorage.setItem(this.DEPENDENT, 'true');
        } else {
          localStorage.setItem(this.DEPENDENT, 'false');
        }
        break;
      }
      case 'anticoagulation': {
        this.anticoagulation = !this.anticoagulation;
        if (this.anticoagulation) {
          localStorage.setItem(this.ANTICOAGULATION, 'true');
        } else {
          localStorage.setItem(this.ANTICOAGULATION, 'false');
        }
        break;
      }
    }
  }

}
