import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewPlanPage } from './new-plan.page';

describe('NewPlanPage', () => {
  let component: NewPlanPage;
  let fixture: ComponentFixture<NewPlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
