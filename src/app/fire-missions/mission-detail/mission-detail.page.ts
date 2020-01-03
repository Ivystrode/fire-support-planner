import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { FireMissionsService } from '../fire-missions.service';
import { Mission } from '../mission-models/mission.model';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.page.html',
  styleUrls: ['./mission-detail.page.scss'],
})
export class MissionDetailPage implements OnInit {

  public loadedMission: Mission;
  private target: string;

  constructor(private activatedRoute: ActivatedRoute,
              private FMservice: FireMissionsService,
              private router: Router,
              private alertCtrl: AlertController,
              private navCtrl: NavController) { }

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
    });
    // this.activatedRoute.snapshot.paramMap.get('target');
  }

}
