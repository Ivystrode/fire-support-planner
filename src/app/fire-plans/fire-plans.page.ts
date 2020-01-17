import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Fireplan } from '../shared/models/fireplan.model';
import { FirePlansService } from './fire-plans.service';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TargetsService } from '../shared/targets.service';

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
              private FPservice: FirePlansService,
              private router: Router,
              private alertCtrl: AlertController,
              private tgtService: TargetsService) { }

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

  newPlanPage() {
    if (this.tgtService.targets.length < 1) {
      this.router.navigateByUrl('/fire-plans');
      this.alertCtrl.create({header: 'Target Array Empty',
      message: 'You must create at least one target before you can create a fire plan.',
      buttons: ['Acknowledge']
      }).then(alertEl => {
        alertEl.present();
      });
    } else {
      this.router.navigateByUrl('fire-plans/new-plan');
    }
  }

}
