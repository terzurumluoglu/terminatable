import { TestBed } from '@angular/core/testing';

import { TerminatableService } from './terminatable.service';

describe('TerminatableService', () => {
  let service: TerminatableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminatableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
