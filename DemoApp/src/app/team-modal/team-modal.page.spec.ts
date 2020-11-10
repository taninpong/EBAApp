import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamModalPage } from './team-modal.page';

describe('TeamModalPage', () => {
  let component: TeamModalPage;
  let fixture: ComponentFixture<TeamModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
