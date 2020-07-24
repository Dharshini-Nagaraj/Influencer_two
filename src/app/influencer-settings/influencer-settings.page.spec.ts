import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfluencerSettingsPage } from './influencer-settings.page';

describe('InfluencerSettingsPage', () => {
  let component: InfluencerSettingsPage;
  let fixture: ComponentFixture<InfluencerSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluencerSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfluencerSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
