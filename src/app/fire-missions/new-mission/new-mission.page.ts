import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../../storage.service';
import { FireMissionsService } from '../fire-missions.service';

@Component({
  selector: 'app-new-mission',
  templateUrl: './new-mission.page.html',
  styleUrls: ['./new-mission.page.scss'],
})
export class NewMissionPage implements OnInit {
  newMissionForm: FormGroup;

  constructor(private storageService: StorageService, private FMservice: FireMissionsService) { }

  ngOnInit() {
    this.newMissionForm = new FormGroup({
      target: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      grid: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      direction: new FormControl(null, {
        updateOn: 'blur',
        // validators: [Validators.required]
      }),
      distance: new FormControl(null, {
        updateOn: 'blur'
        // validators: [Validators.required]
      }),
      zone: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      ammoType: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      numRounds: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  chooseOnMap() {
    console.log('choose target on map');
  }

  onCreateFireMission() {
    if (this.newMissionForm.valid) {
      console.log('new fire mission');
      this.storageService.setObject(this.FMservice.missionNamer(), {
        target: this.newMissionForm.value.target,
        grid: this.newMissionForm.value.grid,
        direction: this.newMissionForm.value.direction,
        distance: this.newMissionForm.value.distance,
        zone: this.newMissionForm.value.zone,
        ammoType: this.newMissionForm.value.ammoType,
        numRounds: this.newMissionForm.value.numRounds
      })
      .then(result => {
        console.log('Data stored: ' + result);
      })
      .catch(error => {
        console.log('Data save error: ' + error);
      });
    } else {
      console.log('form invalid');
    }
  }

  getMission() {
    this.FMservice.getFireMission(this.newMissionForm.value.target);
  }

  showMissions() {
    this.FMservice.showAll();
  }

}

// Tried this

// onCreateFireMission() {
//   if (this.newMissionForm.valid) {
//     console.log('new fire plan');
//     this.FMservice.newMission(
//       this.newMissionForm.value.target,
//       this.newMissionForm.value.grid,
//       this.newMissionForm.value.direction,
//       this.newMissionForm.value.distance,
//       this.newMissionForm.value.zone,
//       this.newMissionForm.value.ammoType,
//       this.newMissionForm.value.numRounds
//     );
//     // .then(result => {
//     //   console.log('Data stored: ' + result);
//     // })
//     // .catch(error => {
//     //   console.log('Data save error: ' + error);
//     // });
//   } else {
//     console.log('form invalid');
//   }
// }
