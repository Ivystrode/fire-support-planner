import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Mission } from './mission-models/mission.model';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-fire-missions',
  templateUrl: './fire-missions.page.html',
  styleUrls: ['./fire-missions.page.scss'],
})
export class FireMissionsPage implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log('switched to: ' + event);

  }

  ionViewWillEnter() {
    console.log('entered fire missions page');
    // this.storageService._missions.forEach(mission => {
    //  console.log(mission);
    // });
}

}
