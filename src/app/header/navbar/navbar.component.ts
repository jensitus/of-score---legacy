import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() public title: string;
  @Input() public bg: string;
  @Input() public home: boolean;

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  backLink() {
    this.location.back();
  }

}
