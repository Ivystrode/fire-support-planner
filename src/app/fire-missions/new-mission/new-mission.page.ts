import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../../storage.service';
import { FireMissionsService } from '../fire-missions.service';
import { PlaceLocation } from '../../shared/models/location.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-mission',
  templateUrl: './new-mission.page.html',
  styleUrls: ['./new-mission.page.scss'],
})
export class NewMissionPage implements OnInit {
  newMissionForm: FormGroup;

  constructor(private storageService: StorageService,
              private FMservice: FireMissionsService,
              private alertCtrl: AlertController,
              private router: Router) { }

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
      description: new FormControl(null, {
        updateOn: 'blur',
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
      }),
      location: new FormControl(null, {
        updateOn: 'blur',
      // validators: [Validators.required]
      })
    });
  }

  onLocationPicked(location: PlaceLocation) {
    // tslint:disable-next-line: object-literal-shorthand
    this.newMissionForm.patchValue({location: location});
  }

  onCreateFireMission() {
    let newMsn;
    if (this.newMissionForm.valid) {
      console.log('new fire mission');
      newMsn = {
        target: this.newMissionForm.value.target,
        grid: this.newMissionForm.value.grid,
        description: this.newMissionForm.value.description,
        direction: this.newMissionForm.value.direction,
        distance: this.newMissionForm.value.distance,
        zone: this.newMissionForm.value.zone,
        ammoType: this.newMissionForm.value.ammoType,
        numRounds: this.newMissionForm.value.numRounds,
        location: this.newMissionForm.value.location,
        engagements: [],
        isComplete: false
      };
      this.FMservice.fireMissions.push(newMsn);
      this.FMservice.newMission(newMsn);
      this.router.navigateByUrl('/fire-missions');
    } else {
      console.log('form invalid');
      this.alertCtrl.create({header: 'Error', message: 'All fields except direction and distance are mandatory', buttons: ['Acknowledge']})
      .then(alertEl => {
        alertEl.present();
      });
    }
  }

  // These two functions were just used for testing. Now that I've got storage working properly, these will be better used elsewhere
  getMission() {
    const reqMsn = this.FMservice.getFromStorage(this.newMissionForm.value.target);
    console.log(reqMsn);
  }
  showMissions() {
    // console.log(this.FMservice.showAll());
    // this.FMservice.showFromStorage().then(results => {
    //   console.log(results);
    // });
    return this.storageService.getObject('FireMissions');
  }

}

