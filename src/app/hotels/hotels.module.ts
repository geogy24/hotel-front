import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';
import {HotelsService} from './hotels.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModalModule, NgbRootModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgbRootModule,
    ReactiveFormsModule,
    NgbModalModule,
    RouterModule
  ],
  entryComponents: [
    ViewComponent
  ],
  declarations: [ListComponent, FormComponent, ViewComponent, FilterComponent],
  exports: [ FilterComponent ],
  providers: [
    HotelsService,
  ],
  schemas: []
})
export class HotelsModule { }
