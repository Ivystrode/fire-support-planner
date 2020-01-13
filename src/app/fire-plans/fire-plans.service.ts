import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../storage.service';
import { pipe } from 'rxjs';
import { Target } from '../shared/models/target.model';
import { Fireplan } from '../shared/models/fireplan.model';

@Injectable({
  providedIn: 'root'
})
export class FirePlansService {
  // Storage service: FirePlans
  public firePlans: any[] = [''];
  // public planTargets: Fireplan['targets'] = [];



  constructor(private storageService: StorageService) { }

  newPlan(newPlan) { // don't actually need an argument?
    this.storageService.setObject('FirePlans', this.firePlans);
  }

  getFromStorage(PlanId) {
    let requestedPlan;
    this.storageService.getObject('FirePlans').then(storedPlanList => {
      this.firePlans = storedPlanList;
    });
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.firePlans.length; i++) {
    if (this.firePlans[i].planname === PlanId) {
      requestedPlan = this.firePlans[i];
      }
    }
    return requestedPlan;
  }

  newEngagement(PlanId, newEng) {
    let requestedPlan;
    this.storageService.getObject('FirePlans').then(storedPlanList => {
      this.firePlans = storedPlanList;
    });
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.firePlans.length; i++) {
    if (this.firePlans[i].target === PlanId) {
      requestedPlan = this.firePlans[i];
      }
    }
    requestedPlan.engagements.push(newEng);
    this.storageService.setObject('FirePlans', this.firePlans);
  }

  completeFirePlan(PlanId) {
    let requestedPlan;
    this.storageService.getObject('FirePlans').then(storedPlanList => {
      this.firePlans = storedPlanList;
    });
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.firePlans.length; i++) {
    if (this.firePlans[i].target === PlanId) {
      requestedPlan = this.firePlans[i];
      }
    }
    requestedPlan.isComplete = true;
    this.storageService.setObject('FirePlans', this.firePlans);
  }

  showFromStorage() {
    this.storageService.getObject('FirePlans').then(storedPlanList => {
      this.firePlans = storedPlanList;
    });
    return [...this.firePlans];
  }




  deleteFirePlan(PlanId) {
    this.storageService.getObject('FirePlans').then(storedPlanList => {
      this.firePlans = storedPlanList;
    });
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.firePlans.length; i++) {
    if (this.firePlans[i].target === PlanId) {
      // ===delete this.firePlans[i]; trying new idea===
      this.firePlans[i] = 'DELETED';
      // == IT WORKS ===
      console.log('FPservice deleted');
      this.storageService.setObject('FirePlans', this.firePlans);
      console.log(this.firePlans[i]);
      console.log('FPservice delete complete');
      }
    }
  }

}
