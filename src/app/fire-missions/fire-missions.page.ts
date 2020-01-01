import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Mission } from './mission-models/mission.model';

@Component({
  selector: 'app-fire-missions',
  templateUrl: './fire-missions.page.html',
  styleUrls: ['./fire-missions.page.scss'],
})
export class FireMissionsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log('switched to: ' + event);

  }

}
