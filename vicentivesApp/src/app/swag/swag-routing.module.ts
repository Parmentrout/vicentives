import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwagComponent } from './swag.component';

const routes: Routes = [
  {
    path: '',
    component: SwagComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwagRoutingModule { }
