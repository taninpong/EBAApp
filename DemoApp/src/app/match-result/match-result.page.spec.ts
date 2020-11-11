import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatchResultPage } from './match-result.page';

describe('MatchResultPage', () => {
  let component: MatchResultPage;
  let fixture: ComponentFixture<MatchResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
