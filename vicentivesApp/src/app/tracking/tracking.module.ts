import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackingRoutingModule } from './tracking-routing.module';
import { TrackingComponent } from './tracking.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [TrackingComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackingRoutingModule
  ]
})
export class TrackingModule { }
