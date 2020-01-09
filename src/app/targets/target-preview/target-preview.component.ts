import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { MapModalComponent } from '../../shared/map-modal/map-modal.component';

@Component({
  selector: 'app-target-preview',
  templateUrl: './target-preview.component.html',
  styleUrls: ['./target-preview.component.scss'],
})
export class TargetPreviewComponent implements OnInit {
  loadedTarget;

  constructor(private modalCtrl: ModalController,
              private alertCtrl: AlertController) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss();
  }

  showMap() {
    if (this.loadedTarget.location) {
     this.modalCtrl.create({component: MapModalComponent, componentProps: {
      center: {lat: this.loadedTarget.location.lat, lng: this.loadedTarget.location.lng},
      selectable: false,
      closeButtonText: 'Close',
      title: this.loadedTarget.location.address
    }}).then(modalEl => {
      modalEl.present();
    });
    } else {
      this.alertCtrl.create({header: 'No Map location set', message: 'Grid reference was entered manually', buttons: ['Acknowledge']
    }).then(alertEl => {
      alertEl.present();
    });
    }
  }

}
