import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditprofileIMGPage } from './editprofile-img.page';

describe('EditprofileIMGPage', () => {
  let component: EditprofileIMGPage;
  let fixture: ComponentFixture<EditprofileIMGPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofileIMGPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditprofileIMGPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
