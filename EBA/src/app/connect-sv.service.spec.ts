import { TestBed } from '@angular/core/testing';

import { ConnectSVService } from './connect-sv.service';

describe('ConnectSVService', () => {
  let service: ConnectSVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectSVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
