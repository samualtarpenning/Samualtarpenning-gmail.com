import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CRMPage } from './crm.page';

describe('CRMPage', () => {
  let component: CRMPage;
  let fixture: ComponentFixture<CRMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CRMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
