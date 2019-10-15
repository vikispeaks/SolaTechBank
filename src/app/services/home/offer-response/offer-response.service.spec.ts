import { TestBed } from '@angular/core/testing';

import { OfferResponseService } from './offer-response.service';

describe('OfferResponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferResponseService = TestBed.get(OfferResponseService);
    expect(service).toBeTruthy();
  });
});
