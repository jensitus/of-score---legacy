import {Component, OnInit} from '@angular/core';
import {OfScore} from '../of-score.enum';

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
  UNKNOWN = 'unknown';

  title = 'state of health';
  bg = 'success';
  next: string;

  asa: boolean;
  dementia: boolean;
  bmi: boolean;
  dependent: boolean;
  anticoagulation: boolean;
  unknown: boolean;
  isEnabled: boolean;

  constructor() {
  }

  ngOnInit() {
    if (localStorage.getItem(this.UNKNOWN) === 'true') {
      this.unknown = true;
    }
    if (localStorage.getItem(this.ASA) === 'true') {
      this.asa = true;
    }
    if (localStorage.getItem(this.DEMENTIA) === 'true') {
      this.dementia = true;
    }
    if (localStorage.getItem(this.BMI) === 'true') {
      this.bmi = true;
    }
    if (localStorage.getItem(this.DEPENDENT) === 'true') {
      this.dependent = true;
    }
    if (localStorage.getItem(this.ANTICOAGULATION) === 'true') {
      this.anticoagulation = true;
    }
    this.next = 'result';
    this.getIsEnabled();
  }

  select(button) {
    switch (button) {
      case 'unknown': {
        this.unknown = !this.unknown;
        if (this.unknown) {
          localStorage.setItem(this.UNKNOWN, 'true');
          localStorage.setItem(this.ASA, 'false');
          this.asa = false;
          localStorage.setItem(this.DEMENTIA, 'false');
          this.dementia = false;
          localStorage.setItem(this.BMI, 'false');
          this.bmi = false;
          localStorage.setItem(this.DEPENDENT, 'false');
          this.dependent = false;
          localStorage.setItem(this.ANTICOAGULATION, 'false');
          this.anticoagulation = false;
        } else {
          localStorage.setItem(this.UNKNOWN, 'false');
        }
        break;
      }
      case 'asa': {
        this.asa = !this.asa;
        if (this.asa) {
          localStorage.setItem(this.ASA, 'true');
          localStorage.setItem(this.UNKNOWN, 'false');
          this.unknown = false;
        } else {
          localStorage.setItem(this.ASA, 'false');
        }
        break;
      }
      case 'dementia': {
        this.dementia = !this.dementia;
        if (this.dementia) {
          localStorage.setItem(this.DEMENTIA, 'true');
          localStorage.setItem(this.UNKNOWN, 'false');
          this.unknown = false;
        } else {
          localStorage.setItem(this.DEMENTIA, 'false');
        }
        break;
      }
      case 'bmi': {
        this.bmi = !this.bmi;
        if (this.bmi) {
          localStorage.setItem(this.BMI, 'true');
          localStorage.setItem(this.UNKNOWN, 'false');
          this.unknown = false;
        } else {
          localStorage.setItem(this.BMI, 'false');
        }
        break;
      }
      case 'dependent': {
        this.dependent = !this.dependent;
        if (this.dependent) {
          localStorage.setItem(this.DEPENDENT, 'true');
          localStorage.setItem(this.UNKNOWN, 'false');
          this.unknown = false;
        } else {
          localStorage.setItem(this.DEPENDENT, 'false');
        }
        break;
      }
      case 'anticoagulation': {
        this.anticoagulation = !this.anticoagulation;
        if (this.anticoagulation) {
          localStorage.setItem(this.ANTICOAGULATION, 'true');
          localStorage.setItem(this.UNKNOWN, 'false');
          this.unknown = false;
        } else {
          localStorage.setItem(this.ANTICOAGULATION, 'false');
        }
        break;
      }
    }
    this.getIsEnabled();
    this.sevenResult();
  }

  private sevenResult() {
    let result = 0;
    if (localStorage.getItem(this.ASA) === 'true') {
      result--;
    }
    if (localStorage.getItem(this.DEMENTIA) === 'true') {
      result--;
    }
    if (localStorage.getItem(this.BMI) === 'true') {
      result--;
    }
    if (localStorage.getItem(this.DEPENDENT) === 'true') {
      result--;
    }
    if (localStorage.getItem(this.ANTICOAGULATION) === 'true') {
      result--;
    }
    if (result <= -2) {
      result = -2;
    }
    localStorage.setItem(OfScore.SEVEN, result.toString());
  }

  private getIsEnabled() {
    if (
      this.asa === true
      || this.dementia === true
      || this.bmi === true
      || this.dependent === true
      || this.anticoagulation === true
      || this.unknown === true
    ) {
      this.isEnabled = true;
    } else {
      this.isEnabled = false;
    }
  }

}
