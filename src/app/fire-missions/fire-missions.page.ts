import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Mission } from './mission-models/mission.model';
import { StorageService } from '../storage.service';
import { FireMissionsService } from './fire-missions.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fire-missions',
  templateUrl: './fire-missions.page.html',
  styleUrls: ['./fire-missions.page.scss'],
})
export class FireMissionsPage implements OnInit {
  loadedMissions: Mission[];

  constructor(private storageService: StorageService,
              private FMservice: FireMissionsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log('switched to: ' + event);

  }

  ionViewWillEnter() {
    console.log('entered fire missions page');
    this.loadedMissions = this.FMservice.showFromStorage();
}

toDetailPage(target) {
  this.activatedRoute.snapshot.paramMap.get('target');
}

}
