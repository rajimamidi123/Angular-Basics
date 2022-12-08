import { TestBed } from '@angular/core/testing';

import { RajiService } from './raji.service';

describe('RajiService', () => {
  let service: RajiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RajiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
