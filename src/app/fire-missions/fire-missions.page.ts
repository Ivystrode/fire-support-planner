import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Mission } from './mission-models/mission.model';
import { StorageService } from '../storage.service';
import { FireMissionsService } from './fire-missions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fire-missions',
  templateUrl: './fire-missions.page.html',
  styleUrls: ['./fire-missions.page.scss'],
})
export class FireMissionsPage implements OnInit {
  loadedMissions: Mission[] = [];
  relevantMissions: Mission[];
  private missionsSub: Subscription;
  noMissions = true;

  constructor(private storageService: StorageService,
              private FMservice: FireMissionsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log('entered fire missions page');
    this.loadedMissions = this.FMservice.fireMissions; // changed from showFromStorate to see if delete then works properly...
    if (this.loadedMissions.length < 2) {
      this.noMissions = true;
    } else {
      this.noMissions = false;
    }
}

  async onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log('switched to: ' + event);
    // this.loadedMissions = this.FMservice.fireMissions;
    if (event.detail.value === 'inProgress') {
      this.relevantMissions = this.loadedMissions.filter(mission => mission.isComplete === false);
    } else {
      this.relevantMissions = this.loadedMissions.filter(mission => mission.isComplete === true);
    }
  }


toDetailPage(target) {
  this.activatedRoute.snapshot.paramMap.get('target');
}

onDelete(missionId: string) {
  console.log('delete function begin');
  this.FMservice.deleteFireMission(missionId);
  console.log('mission deleted ' + missionId);
  // this.loadedMissions = this.FMservice.fireMissions;
}

}
