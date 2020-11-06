import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeEBAPage } from './home-eba.page';

describe('HomeEBAPage', () => {
  let component: HomeEBAPage;
  let fixture: ComponentFixture<HomeEBAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEBAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeEBAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
