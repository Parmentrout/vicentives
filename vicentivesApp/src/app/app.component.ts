import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ModalController } from '@ionic/angular';
import { TrackingComponent } from './tracking/tracking.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private swUpdate: SwUpdate, public modalController: ModalController) {
    swUpdate.available.subscribe(event => {
        window.location.reload();
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: TrackingComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
