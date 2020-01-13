import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { FireMissionsService } from 'src/app/fire-missions/fire-missions.service';
import { TargetsService } from 'src/app/shared/targets.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirePlansService } from '../fire-plans.service';

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.page.html',
  styleUrls: ['./new-plan.page.scss'],
})
export class NewPlanPage implements OnInit {
  newPlanForm: FormGroup;
  targets = this.tgtService.targets;

  constructor(private FPservice: FirePlansService,
              private tgtService: TargetsService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.newPlanForm = new FormGroup({
      planname: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      supporting: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      originator: new FormControl(null, {
        updateOn: 'blur',
      }),
      modsby: new FormControl(null, {
        updateOn: 'blur',
        // validators: [Validators.required]
      }),
      superimposed: new FormControl(null, {
        updateOn: 'blur'
        // validators: [Validators.required]
      }),
      hhr: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dtg: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      targets: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });

    this.newPlanForm.patchValue(new Date().getDate);
  }

  onCreateFirePlan() {
    let newPlan;
    if (this.newPlanForm.valid) {
      console.log('new fire plan');
      newPlan = {
        planname: this.newPlanForm.value.planname,
        supporting: this.newPlanForm.value.supporting,
        originator: this.newPlanForm.value.originator,
        modsby: this.newPlanForm.value.modsby,
        superimposed: this.newPlanForm.value.superimposed,
        hhr: this.newPlanForm.value.hhr,
        dtg: this.newPlanForm.value.dtg,
        targets: this.newPlanForm.value.targets,
        isComplete: false
      };
      this.FPservice.firePlans.push(newPlan);
      this.FPservice.newPlan(newPlan);
      this.router.navigateByUrl('/fire-plans');
    } else {
      console.log('form invalid');
      this.alertCtrl.create({header: 'Error', message: 'All fields are mandatory', buttons: ['Acknowledge']})
      .then(alertEl => {
        alertEl.present();
      });
    }
  }

}


