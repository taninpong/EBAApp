import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayOffPage } from './play-off.page';

describe('PlayOffPage', () => {
  let component: PlayOffPage;
  let fixture: ComponentFixture<PlayOffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayOffPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayOffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
