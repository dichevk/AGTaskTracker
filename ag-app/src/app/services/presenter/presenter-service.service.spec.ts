import { TestBed } from '@angular/core/testing';

import { PresenterServiceService } from './presenter-service.service';

describe('PresenterServiceService', () => {
  let service: PresenterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresenterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
