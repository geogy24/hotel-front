import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../hotels.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Hotel} from '../../models/hotel';
import {ViewComponent} from '../view/view.component';
import {IResponse} from '../../interfaces/IResponse';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public url_image = 'http://localhost:3000/uploads/';

  public hotels: Hotel[];

  public selectedHotel: Hotel;

  public message: string;

  constructor(private hotelsService: HotelsService, private modalService: NgbModal) { }

  public showAlert = true;

  ngOnInit() {
    this.getListHotels();
  }

  /**
   * get list of hotels
   *
   * @return void
   */
  private getListHotels() {
    this.hotelsService.getHotels();
    this.hotelsService.currentHotels.subscribe((data) => {
      this.hotels = data;
    });
  }

  /**
   * confirm delete
   *
   * @param content
   */
  open(content, hotel) {
    this.selectedHotel = hotel;

    this.modalService.open(content, {centered: true}).result
      .then((result) => {
        this.removeHotel(this.selectedHotel._id);
      })
      .catch((result) => {
        console.log(this.selectedHotel._id);
      });
  }

  /**
   * delete hotel
   *
   * @param {number} id
   */
  private removeHotel(id: string) {
    this.hotelsService.removeHotel(id).subscribe((response: IResponse) => {
      if (response.status == 200) {
        this.showAlertMessage(response.data.message);
        this.getListHotels();
      } else {
        this.showAlertMessage(response.message);
      }
    });
  }

  /**
   * Show alert message
   *
   * @param message
   */
  private showAlertMessage(message) {
    this.message = message;
    this.showAlert = false;
    setTimeout(() => this.showAlert = true, 5000);
  }


  openDetail(id: string) {
    const modalReference = this.modalService.open(ViewComponent, {centered: true});

    modalReference.componentInstance.id = id;
  }
}
