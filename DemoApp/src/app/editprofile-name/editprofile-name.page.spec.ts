import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditprofileNAMEPage } from './editprofile-name.page';

describe('EditprofileNAMEPage', () => {
  let component: EditprofileNAMEPage;
  let fixture: ComponentFixture<EditprofileNAMEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofileNAMEPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditprofileNAMEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
