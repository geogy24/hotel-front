import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HotelsModule} from './hotels/hotels.module';
import {ListComponent} from './hotels/list/list.component';
import {FormComponent} from './hotels/form/form.component';

const routes = [
  { path: '', component: ListComponent},
  { path: 'hotel', component: FormComponent},
  { path: 'hotel/:id', component: FormComponent}
];

@NgModule({
  imports: [
    CommonModule,
    HotelsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
