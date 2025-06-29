import { TestBed } from '@angular/core/testing';

import { MargeServiceService } from './marge-service.service';

describe('MargeServiceService', () => {
  let service: MargeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MargeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
