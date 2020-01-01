import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewMissionPage } from './new-mission.page';

describe('NewMissionPage', () => {
  let component: NewMissionPage;
  let fixture: ComponentFixture<NewMissionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMissionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewMissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
