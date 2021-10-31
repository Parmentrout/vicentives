import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalibrationRoutingModule } from './calibration-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalibrationComponent } from './calibration.component';


@NgModule({
  declarations: [CalibrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalibrationRoutingModule
  ]
})
export class CalibrationModule { }
