import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mission } from './mission-models/mission.model';
import { StorageService } from '../storage.service';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireMissionsService {
  public fireMissions = [];

  constructor(private storageService: StorageService) { }

  // Names each mission using the length of an array storing all missions to number each mission sequentially
  // do i need this now if im storing the array? (assuming this works)
  // YES - using target as ID is a temporary solution. Need to give them ID's as well
  // or do I really...?


  // missionNamer() {
  //   const newMission = 'Fire Mission ' + (this.fireMissions.length).toString();
  //   this.fireMissions.push(newMission);
  //   console.log('new mission named: ' + newMission);
  //   console.log('Total missions: ' + (this.fireMissions.length).toString());
  //   console.log(this.fireMissions);
  //   return newMission;
  // }

  newMission(newMsn) { // don't actually need an argument?
    this.storageService.setObject('FireMissions', this.fireMissions);
  }

  getFromStorage(missionId) {
    let requestedMission;
    this.storageService.getObject('FireMissions').then(storedMissionList => {
      this.fireMissions = storedMissionList;
    });
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.fireMissions.length; i++) {
    if (this.fireMissions[i].target === missionId) {
      requestedMission = this.fireMissions[i];
      }
    }
    return requestedMission;
  }

  showFromStorage() {
    return [...this.fireMissions];
  }

}
