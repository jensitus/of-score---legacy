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
  private _OF_3_O_T = '../../assets/pictures/of-pictures/OF3oT.jpeg';

  private _OF_4_O_T = '../../assets/pictures/of-pictures/OF4oT.jpeg';

  private _OF_5_O_T = '../../assets/pictures/of-pictures/OF5oT.jpeg';

  ofPics: string[];
  title: string;
  pauseOnHover = true;

  constructor(
    private modalService: NgbModal
  ) {
  }

  ngOnInit() {
    switch (this.ofp) {
      case '1': {
        this.ofPics = [this._OF_1_O_T];
        this.title = 'OF 1';
        break;
      }
      case '2': {
        this.ofPics = [this._OF_2_O_T];
        this.title = 'OF 2';
        break;
      }
      case '3': {
        this.ofPics = [this._OF_3_O_T];
        this.title = 'OF 3';
        break;
      }
      case '4': {
        this.ofPics = [this._OF_4_O_T];
        this.title = 'OF 4';
        break;
      }
      case '5': {
        this.ofPics = [this._OF_5_O_T];
        this.title = 'OF 5';
        break;
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
