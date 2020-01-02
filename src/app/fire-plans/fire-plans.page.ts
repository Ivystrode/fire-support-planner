import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-fire-plans',
  templateUrl: './fire-plans.page.html',
  styleUrls: ['./fire-plans.page.scss'],
})
export class FirePlansPage implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }



}
