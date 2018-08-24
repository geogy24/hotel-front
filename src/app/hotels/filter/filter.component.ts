import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HotelsService} from '../hotels.service';
import {NgbAccordion, NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';

declare var $: any;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public filterForm: FormGroup;

  @ViewChild('acc') acc: NgbAccordion;

  constructor(private formBuilder: FormBuilder,
              private hotelsService: HotelsService) { }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      name: ['', Validators.required],
      0: [true],
      1: [false],
      2: [false],
      3: [false],
      4: [false],
      5: [false]
    });
  }

  onSubmit() {
    const formData = new FormData();

    for (const key in this.filterForm.controls) {
      formData.append(key, this.filterForm.get(key).value);
    }

    this.hotelsService.filter(formData);
  }
}
