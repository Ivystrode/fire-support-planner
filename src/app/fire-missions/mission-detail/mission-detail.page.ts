import { Component, OnInit, NgZone, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { FireMissionsService } from '../fire-missions.service';
import { Mission } from '../mission-models/mission.model';
import { MapModalComponent } from '../../shared/map-modal/map-modal.component';
import { AddEngagementComponent } from './add-engagement/add-engagement.component';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.page.html',
  styleUrls: ['./mission-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MissionDetailPage implements OnInit {

  public loadedMission: Mission;
  private target: string;
  public engagements = [];

  constructor(private activatedRoute: ActivatedRoute,
              private FMservice: FireMissionsService,
              private router: Router,
              private alertCtrl: AlertController,
              private navCtrl: NavController,
              public modalCtrl: ModalController,
              private zone: NgZone,
              private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('ngoninit');
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('target')) {
        // redirect the user
        this.navCtrl.navigateBack('/fire-missions');
        return;
      }
      this.target = paramMap.get('target');
      this.loadedMission = this.FMservice.getFromStorage(this.target);
      this.engagements = this.loadedMission.engagements;
    });
    // this.activatedRoute.snapshot.paramMap.get('target');
  }

  showMap() {
    if (this.loadedMission.location) {
     this.modalCtrl.create({component: MapModalComponent, componentProps: {
      center: {lat: this.loadedMission.location.lat, lng: this.loadedMission.location.lng},
      selectable: false,
      closeButtonText: 'Close',
      title: this.loadedMission.location.address
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

  async addEngagement() {
    this.modalCtrl.create({component: AddEngagementComponent,
    componentProps: {
      loadedMission: this.loadedMission
    }}).then(modal => {
      modal.present();
      modal.onDidDismiss().then(() => {
        // localStorage.sync();
        this.changeDetector.detectChanges();
      });
    });
  }

  endMission() {
    this.alertCtrl.create({header: 'CONFIRM END MISSION',
    message: 'Ending the mission will prevent further engagements from being added',
    buttons: [
      {
        text: 'Cancel',
        role: 'Cancel'
      },
      {
        text: 'Confirm',
        handler: () => {
          console.log('Confirm end fire mission');
          this.FMservice.completeFireMission(this.loadedMission.target);
          this.router.navigateByUrl('/fire-missions');
        }
      }
    ]
  }).then(alertEl => {
    alertEl.present();
  });
  }

}
