import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { Fireplan } from 'src/app/shared/models/fireplan.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FirePlansService } from '../fire-plans.service';
import { TargetsService } from 'src/app/shared/targets.service';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { TargetPreviewComponent } from '../../targets/target-preview/target-preview.component';
import { Target } from 'src/app/shared/models/target.model';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.page.html',
  styleUrls: ['./plan-detail.page.scss'],
})
export class PlanDetailPage implements OnInit {

  public loadedPlan: Fireplan;
  private planname: string;
  public loadedTargets: Target[];
  public loadedTarget: Target;

  constructor(private activatedRoute: ActivatedRoute,
              private FPservice: FirePlansService,
              private tgtService: TargetsService,
              private router: Router,
              private alertCtrl: AlertController,
              private navCtrl: NavController,
              public modalCtrl: ModalController,
              private zone: NgZone,
              private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('ngoninit');
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('planname')) {
        // redirect the user
        this.navCtrl.navigateBack('/fire-plans');
        return;
      }
      this.planname = paramMap.get('planname');
      this.loadedPlan = this.FPservice.getFromStorage(this.planname);
    });
  }

  ionViewWillEnter() {
    this.loadedPlan = this.FPservice.getFromStorage(this.planname);
  }

  previewTarget(targetId) {
    this.loadedTarget = this.tgtService.getFromStorage(targetId);
    this.modalCtrl.create({component: TargetPreviewComponent,
    componentProps: {
      loadedTarget: this.loadedTarget
    }}).then(modal => {
      modal.present();
    });
  }

}
