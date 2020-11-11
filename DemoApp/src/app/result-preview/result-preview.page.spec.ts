import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultPreviewPage } from './result-preview.page';

describe('ResultPreviewPage', () => {
  let component: ResultPreviewPage;
  let fixture: ComponentFixture<ResultPreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultPreviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
