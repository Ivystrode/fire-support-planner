import { TestBed } from '@angular/core/testing';

import { FirePlansService } from './fire-plans.service';

describe('FirePlansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirePlansService = TestBed.get(FirePlansService);
    expect(service).toBeTruthy();
  });
});
