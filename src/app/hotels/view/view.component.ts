import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HotelsService} from '../hotels.service';
import {Hotel} from '../../models/hotel';
import {IResponse} from '../../interfaces/IResponse';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public url_image = 'http://localhost:3000/uploads/';

  public hotel: Hotel;

  @Input()
  set id(id: string) {
    this.hotelsService.getHotel(id).subscribe((response: IResponse) => {
      if (response.status == 200) {
        this.hotel = response.data[0];
      } else {
        // TODO
      }
    });
  }

  constructor(public activeModal: NgbActiveModal, private hotelsService: HotelsService) { }

  ngOnInit() {
  }
}
