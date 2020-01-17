import { Component, OnInit } from '@angular/core';
import { Fireplan } from 'src/app/shared/models/fireplan.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FirePlansService } from '../fire-plans.service';

@Component({
  selector: 'app-add-fire-unit',
  templateUrl: './add-fire-unit.page.html',
  styleUrls: ['./add-fire-unit.page.scss'],
})
export class AddFireUnitPage implements OnInit {

  public loadedPlan: Fireplan;
  private planname: string;

  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController, private FPservice: FirePlansService) { }

  ngOnInit() {
    console.log('ngoninit');
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('planname')) {
        // redirect the user
        this.navCtrl.navigateBack('/fire-missions');
        return;
      }
      this.planname = paramMap.get('planname');
      this.loadedPlan = this.FPservice.getFromStorage(this.planname);
    });
  }

}
