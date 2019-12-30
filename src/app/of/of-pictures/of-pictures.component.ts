import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-of-pictures',
  templateUrl: './of-pictures.component.html',
  styleUrls: ['./of-pictures.component.css']
})
export class OfPicturesComponent implements OnInit {

  private _OF_1_M_T = '../../assets/pictures/of-pictures/OF1mT.jpeg';
  private _OF_1_O_T = '../../assets/pictures/of-pictures/OF1oT.jpg';

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {size: 'lg' , ariaLabelledBy: 'modal-description-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


}
