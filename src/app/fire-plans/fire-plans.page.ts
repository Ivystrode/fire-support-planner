import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Fireplan } from '../shared/models/fireplan.model';
import { FirePlansService } from './fire-plans.service';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-fire-plans',
  templateUrl: './fire-plans.page.html',
  styleUrls: ['./fire-plans.page.scss'],
})
export class FirePlansPage implements OnInit {
  loadedPlans: Fireplan[] = [];
  relevantPlans: Fireplan[];
  noPlans = false;

  constructor(private storageService: StorageService,
              private FPservice: FirePlansService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log('entered fire missions page');
    this.loadedPlans = this.FPservice.firePlans;
    this.relevantPlans = this.loadedPlans.filter(plan => plan.isComplete === false);
    if (this.loadedPlans.length < 2) {
      this.noPlans = true;
    } else {
      this.noPlans = false;
    }
}

  async onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log('switched to: ' + event);
    if (event.detail.value === 'inProgress') {
      this.relevantPlans = this.loadedPlans.filter(plan => plan.isComplete === false);
    } else {
      this.relevantPlans = this.loadedPlans.filter(plan => plan.isComplete === true);
    }
  }

}
