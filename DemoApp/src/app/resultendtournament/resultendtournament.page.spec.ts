import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultendtournamentPage } from './resultendtournament.page';

describe('ResultendtournamentPage', () => {
  let component: ResultendtournamentPage;
  let fixture: ComponentFixture<ResultendtournamentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultendtournamentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultendtournamentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
