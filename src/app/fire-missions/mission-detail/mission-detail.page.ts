import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FireMissionsService } from '../fire-missions.service';
import { Mission } from '../mission-models/mission.model';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.page.html',
  styleUrls: ['./mission-detail.page.scss'],
})
export class MissionDetailPage implements OnInit {

  loadedMission: Mission;

  constructor(private activatedRoute: ActivatedRoute,
              private FMservice: FireMissionsService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    console.log("ngoninit");
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('target')) {
        // redirect the user
        this.router.navigate(['/fire-missions']);
        return;
      }
      const target = paramMap.get('target');
      this.loadedMission = this.FMservice.getFromStorage(target);
    });
  }

}
