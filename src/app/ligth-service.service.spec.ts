import { TestBed } from '@angular/core/testing';

import { LigthServiceService } from './ligth-service.service';

describe('LigthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LigthServiceService = TestBed.get(LigthServiceService);
    expect(service).toBeTruthy();
  });
});
