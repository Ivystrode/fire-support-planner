import { Component, OnInit } from '@angular/core';
import { Target } from '../shared/models/target.model';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../fire-missions/mission-models/mission.model';
import { NavController } from '@ionic/angular';
import { FireMissionsService } from '../fire-missions/fire-missions.service';
import { TargetsService } from '../shared/targets.service';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.page.html',
  styleUrls: ['./targets.page.scss'],
})
export class TargetsPage implements OnInit {
  public loadedTargets: Target[];

  constructor(private activatedRoute: ActivatedRoute,
              private navCtrl: NavController,
              private FMservice: FireMissionsService,
              private tgtService: TargetsService) { }

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



}
