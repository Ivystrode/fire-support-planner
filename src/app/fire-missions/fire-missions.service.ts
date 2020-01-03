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

    // this console logs a SINGLE fire mission
    getFireMission(missionId) {
      this.storageService.getObject(missionId).then(result => {
        if (result != null) {
          console.log('Fire Mission: ' + result.key + ' Target: ' + result.target + ' grid: ' + result.grid);
        }
      }).catch(error => {
        console.log('error!!!: ', error);
      });
    }
  
    // this console logs ALL fire missions
    // it works, but trying to figure out how to get the mission name/ID to display
    // it is saved in the allMissions list - hence trying to access it with msnName below
    // but doesnt work..
    showAll() {
      let msn: number;
      let msnName = this.allMissions[msn];
      for (msn = 0; msn < this.allMissions.length; msn++) {
        console.log(this.allMissions[msn]);
        this.storageService.getObject(this.allMissions[msn])
        .then(res => {
          // msnName = this.allMissions[msn];
          console.log(msnName);
          console.log(res);
        }).catch(err => {
          console.log('Error! Either no fire missions or: ' + err);
        });
      }
    }






}
