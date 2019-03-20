import { TestBed } from '@angular/core/testing';

import { GulmoharApiService } from './gulmohar-api.service';

describe('GulmoharApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GulmoharApiService = TestBed.get(GulmoharApiService);
    expect(service).toBeTruthy();
  });
});
