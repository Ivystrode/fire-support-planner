import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FireMissionsPage } from './fire-missions.page';

describe('FireMissionsPage', () => {
  let component: FireMissionsPage;
  let fixture: ComponentFixture<FireMissionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireMissionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FireMissionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
