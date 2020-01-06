import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-of-pictures',
  templateUrl: './of-pictures.component.html',
  styleUrls: ['./of-pictures.component.css']
})
export class OfPicturesComponent implements OnInit {

  @Input() public ofp: string;

  private _OF_1_M_T = '../../assets/pictures/of-pictures/OF1mT.jpeg';
  private _OF_1_O_T = '../../assets/pictures/of-pictures/OF1oT.jpg';

  private _OF_2_M_T = '../../assets/pictures/of-pictures/OF2mT.jpeg';
  private _OF_2_O_T = '../../assets/pictures/of-pictures/OF2oT.jpg';

  private _OF_3_M_T = '../../assets/pictures/of-pictures/OF3mT.jpeg';

  private _OF_4_M_T = '../../assets/pictures/of-pictures/OF4mT.jpeg';

  private _OF_5_M_T = '../../assets/pictures/of-pictures/OF5mT.jpeg';

  ofPics: string[];
  pauseOnHover = true;

  constructor(
    private modalService: NgbModal
  ) {
  }

  ngOnInit() {
    switch (this.ofp) {
      case '1': {
        this.ofPics = [this._OF_1_M_T, this._OF_1_O_T];
        break;
      }
      case '2': {
        this.ofPics = [this._OF_2_M_T, this._OF_2_O_T];
        break;
      }
      case '3': {
        this.ofPics = [this._OF_3_M_T];
        break;
      }
      case '4': {
        this.ofPics = [this._OF_4_M_T];
        break;
      }
      case '5': {
        this.ofPics = [this._OF_5_M_T];
      }
    }

  }

  open(content) {
    this.modalService.open(content, {size: 'lg', ariaLabelledBy: 'modal-description-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


}
