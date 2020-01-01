import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirePlansPage } from './fire-plans.page';

describe('FirePlansPage', () => {
  let component: FirePlansPage;
  let fixture: ComponentFixture<FirePlansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirePlansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirePlansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
