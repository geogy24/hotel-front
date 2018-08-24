import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HotelsService} from '../hotels.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IResponse} from '../../interfaces/IResponse';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private id: string;

  public hotelForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private hotelsService: HotelsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;

    this.hotelForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      stars: [0, Validators.required],
      amenities: [''],
      image: [null]
    });

    if (this.id) {
      this.hotelsService.getHotel(this.id).subscribe((response: IResponse) => {
        if (response.status == 200) {
          for (let key in this.hotelForm.controls) {
            if (key != 'amenities') {
              this.hotelForm.get(key).setValue(response.data[0][key]);
            } else {
              this.hotelForm.get(key).setValue(response.data[0][key].join(','));
            }
          }
        } else {
          // TODO
        }
      });
    }
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.hotelForm.get('image').setValue(file);
    }
  }

  onSubmit() {
    let formData = new FormData();

    for (let key in this.hotelForm.controls) {
      if(key != 'amenities') {
        formData.append(key, this.hotelForm.get(key).value);
      } else {
        let amenitites = this.hotelForm.get(key).value.split(',');

        for(let i = 0; i < amenitites.length; i++) {
          formData.append(`${key}[]`, amenitites[i]);
        }
      }
    }

    if (this.id) {
      this.hotelsService.updateHotel(this.id, formData).subscribe((response: IResponse) => {
        if (response.status == 200) {
          this.router.navigate(['/']);
        } else {
          // TODO
        }
      });
    } else {
      this.hotelsService.createHotel(formData).subscribe((response: IResponse) => {
        if(response.status == 200) {
          this.router.navigate(['/']);
        } else {
          // TODO
        }
      });
    }
  }

}
