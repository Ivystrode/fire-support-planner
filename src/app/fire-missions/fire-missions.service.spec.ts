import { TestBed } from '@angular/core/testing';

import { FireMissionsService } from './fire-missions.service';

describe('FireMissionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireMissionsService = TestBed.get(FireMissionsService);
    expect(service).toBeTruthy();
  });
});
