import { Component, OnInit } from '@angular/core';
import { Target } from '../shared/models/target.model';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../fire-missions/mission-models/mission.model';
import { NavController, ModalController } from '@ionic/angular';
import { FireMissionsService } from '../fire-missions/fire-missions.service';
import { TargetsService } from '../shared/targets.service';
import { TargetPreviewComponent } from './target-preview/target-preview.component';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.page.html',
  styleUrls: ['./targets.page.scss'],
})
export class TargetsPage implements OnInit {
  public loadedTargets: Target[];
  public loadedTarget: Target;

  constructor(private activatedRoute: ActivatedRoute,
              private navCtrl: NavController,
              private FMservice: FireMissionsService,
              private tgtService: TargetsService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.loadedTargets = this.tgtService.targets;
  }

  ionViewWillEnter() {
    this.loadedTargets = this.tgtService.targets;
  }

  onDelete(targetId) {
    console.log('Deleting...');
    this.tgtService.deleteTarget(targetId);
  }

  onPreview(targetId) {
    this.loadedTarget = this.tgtService.getFromStorage(targetId);
    this.modalCtrl.create({component: TargetPreviewComponent,
    componentProps: {
      loadedTarget: this.loadedTarget
    }}).then(modal => {
      modal.present();
    });
  }



}
