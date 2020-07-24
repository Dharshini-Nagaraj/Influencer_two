import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerSettingsPage } from './customer-settings.page';

describe('CustomerSettingsPage', () => {
  let component: CustomerSettingsPage;
  let fixture: ComponentFixture<CustomerSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
