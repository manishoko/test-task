import { TestBed, inject } from '@angular/core/testing';

import { GettingService } from './getting.service';

describe('GettingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GettingService]
    });
  });

  it('should be created', inject([GettingService], (service: GettingService) => {
    expect(service).toBeTruthy();
  }));
});
