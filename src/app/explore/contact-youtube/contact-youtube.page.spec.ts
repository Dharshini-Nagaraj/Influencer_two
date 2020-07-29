import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactYoutubePage } from './contact-youtube.page';

describe('ContactYoutubePage', () => {
  let component: ContactYoutubePage;
  let fixture: ComponentFixture<ContactYoutubePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactYoutubePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactYoutubePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
