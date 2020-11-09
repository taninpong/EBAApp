import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MTuornamentPage } from './mtuornament.page';

describe('MTuornamentPage', () => {
  let component: MTuornamentPage;
  let fixture: ComponentFixture<MTuornamentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTuornamentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MTuornamentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
