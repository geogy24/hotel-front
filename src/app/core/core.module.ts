import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {NgbRootModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {HotelsModule} from '../hotels/hotels.module';

@NgModule({
  imports: [
    CommonModule,
    NgbRootModule,
    RouterModule,
    HotelsModule
  ],
  exports: [ MenuComponent ],
  declarations: [MenuComponent]
})
export class CoreModule { }
