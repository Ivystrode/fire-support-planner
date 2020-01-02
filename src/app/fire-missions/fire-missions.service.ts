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

  constructor(private storageService: StorageService) { }

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
