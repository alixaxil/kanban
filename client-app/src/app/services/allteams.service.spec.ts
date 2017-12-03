import { TestBed, inject } from '@angular/core/testing';

import { AllteamsService } from './allteams.service';

describe('AllteamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllteamsService]
    });
  });

  it('should be created', inject([AllteamsService], (service: AllteamsService) => {
    expect(service).toBeTruthy();
  }));
});
