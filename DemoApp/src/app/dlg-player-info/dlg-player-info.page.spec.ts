import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DlgPlayerInfoPage } from './dlg-player-info.page';

describe('DlgPlayerInfoPage', () => {
  let component: DlgPlayerInfoPage;
  let fixture: ComponentFixture<DlgPlayerInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgPlayerInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DlgPlayerInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
