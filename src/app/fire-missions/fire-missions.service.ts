import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mission } from './mission-models/mission.model';
import { StorageService } from '../storage.service';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireMissionsService {
  public _missions = new BehaviorSubject<Mission[]>([]);
  public allMissions = [];

  constructor(private storageService: StorageService) { }

  // Names each mission using the length of an array storing all missions to number each mission sequentially
  missionNamer() {
    const newMission = 'Fire Mission ' + (this.allMissions.length).toString();
    this.allMissions.push(newMission);
    console.log('new mission named: ' + newMission);
    console.log('Total missions: ' + (this.allMissions.length).toString());
    console.log(this.allMissions);
    return newMission;
  }

  newMission(
    target: string,
    grid: string,
    direction: number,
    distance: number,
    zone: string,
    ammoType: string,
    numRounds: number
  ) {
    let newMission: Mission;
    newMission = new Mission(
      target,
      grid,
      direction,
      distance,
      zone,
      ammoType,
      numRounds
    );
    this.storageService.setObject('FireMsn', newMission);
  }






}
