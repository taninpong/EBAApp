import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DlgPlayerDetailPage } from './dlg-player-detail.page';

describe('DlgPlayerDetailPage', () => {
  let component: DlgPlayerDetailPage;
  let fixture: ComponentFixture<DlgPlayerDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgPlayerDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DlgPlayerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
