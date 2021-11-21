import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalibrationRoutingModule } from './calibration-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalibrationComponent } from './calibration.component';
import { UserService } from '../services/user.service';
import { TrackingService } from '../services/tracking.service';


@NgModule({
  declarations: [CalibrationComponent],
  providers: [UserService, TrackingService],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalibrationRoutingModule
  ]
})
export class CalibrationModule { }
