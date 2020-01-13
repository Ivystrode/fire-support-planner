import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { Fireplan } from 'src/app/shared/models/fireplan.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FirePlansService } from '../fire-plans.service';
import { TargetsService } from 'src/app/shared/targets.service';
import { AlertController, NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.page.html',
  styleUrls: ['./plan-detail.page.scss'],
})
export class PlanDetailPage implements OnInit {

  public loadedPlan: Fireplan;
  private planname: string;

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

}
