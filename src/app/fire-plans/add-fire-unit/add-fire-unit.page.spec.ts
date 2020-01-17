import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFireUnitPage } from './add-fire-unit.page';

describe('AddFireUnitPage', () => {
  let component: AddFireUnitPage;
  let fixture: ComponentFixture<AddFireUnitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFireUnitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFireUnitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
