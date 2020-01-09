import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class TargetsService {
    // Storage service: MainTargetList
    public targets: any[] = [];

  constructor(private storageService: StorageService) { }

  recordAsTarget(newTgt) {
    newTgt = {
      target: newTgt.target,
      originator: 'GQ25',
      description: newTgt.description,
      grid: newTgt.grid,
      location: newTgt.location,
      alt: 103,
      remarks: '',
      isAdjusted: true
    };
    this.targets.push(newTgt);
    console.log('Target created: ' + newTgt);
    this.storageService.setObject('MainTargetList', this.targets);
  }

  deleteTarget(targetId) {
    console.log('delete tbc' + targetId);
    this.storageService.getObject('MainTargetList').then(storedTargetList => {
      this.targets = storedTargetList;
    });
    for (let i = 0; i < this.targets.length; i++) {
      if (this.targets[i].target === targetId) {
        this.targets[i] = 'DELETED';
        console.log('Tgt service delete function success');
        this.storageService.setObject('MainTargetList', this.targets);
        console.log(this.targets);
      }
    }
  }


}
