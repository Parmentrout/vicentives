import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwagRoutingModule } from './swag-routing.module';
import { SwagComponent } from './swag.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [SwagComponent],
  imports: [
    CommonModule,
    IonicModule,
    SwagRoutingModule
  ]
})
export class SwagModule { }
