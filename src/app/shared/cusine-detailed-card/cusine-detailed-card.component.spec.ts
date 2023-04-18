import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CusineDetailedCardComponent } from './cusine-detailed-card.component';

describe('CusineDetailedCardComponent', () => {
  let component: CusineDetailedCardComponent;
  let fixture: ComponentFixture<CusineDetailedCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CusineDetailedCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CusineDetailedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
