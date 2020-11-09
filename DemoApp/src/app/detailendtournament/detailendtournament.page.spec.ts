import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailendtournamentPage } from './detailendtournament.page';

describe('DetailendtournamentPage', () => {
  let component: DetailendtournamentPage;
  let fixture: ComponentFixture<DetailendtournamentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailendtournamentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailendtournamentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
