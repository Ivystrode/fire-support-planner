import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from 'src/app/storage.service';
import { FireMissionsService } from '../../fire-missions.service';

@Component({
  selector: 'app-add-engagement',
  templateUrl: './add-engagement.component.html',
  styleUrls: ['./add-engagement.component.scss'],
})
export class AddEngagementComponent implements OnInit {
  newEngagementForm: FormGroup;
  loadedMission;

  constructor(private modalCtrl: ModalController,
              private storageService: StorageService,
              private FMservice: FireMissionsService) { }

  ngOnInit() {
    console.log(`${this.loadedMission.target}`);
    this.newEngagementForm = new FormGroup({
      direction: new FormControl(null, {
        updateOn: 'blur'
      }),
      directionAmount: new FormControl(null, {
        updateOn: 'blur'
      }),
      distance: new FormControl(null, {
        updateOn: 'blur'
      }),
      distanceAmount: new FormControl(null, {
        updateOn: 'blur'
      }),
      height: new FormControl(null, {
        updateOn: 'blur'
      }),
      heightAmount: new FormControl(null, {
        updateOn: 'blur'
      }),
      rounds: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      rate: new FormControl(null, {
        updateOn: 'blur'
      }),
      type: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }

  addEngagement() {
    let newEng;
    const missionId = this.loadedMission.target;
    if (this.newEngagementForm.valid) {
      console.log('New engagement');
      newEng = {
        directionCorrection: this.newEngagementForm.value.direction + this.newEngagementForm.value.directionAmount,
        distanceCorrection: this.newEngagementForm.value.distance + this.newEngagementForm.value.distanceAmount,
        heightCorrection: this.newEngagementForm.value.height + this.newEngagementForm.value.heightAmount,
        rounds: this.newEngagementForm.value.rounds,
        rate: this.newEngagementForm.value.rate,
        type: this.newEngagementForm.value.type
      };
      console.log(newEng);
      this.modalCtrl.dismiss(this.FMservice.newEngagement(missionId, newEng));
      // window.location.reload(); tried to use to refresh mission detail page
    } else {
      console.log('form invalid');
    }
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }

}
