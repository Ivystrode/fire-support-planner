import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MissionDetailPage } from './mission-detail.page';

describe('MissionDetailPage', () => {
  let component: MissionDetailPage;
  let fixture: ComponentFixture<MissionDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MissionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
