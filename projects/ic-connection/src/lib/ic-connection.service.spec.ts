import { TestBed } from '@angular/core/testing';

import { IcConnectionService } from './ic-connection.service';

describe('IcConnectionService', () => {
  let service: IcConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
