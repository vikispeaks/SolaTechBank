import { TestBed, inject } from '@angular/core/testing';

import { TransactionViewService } from './transaction-view.service';

describe('TransactionViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionViewService]
    });
  });

  it('should be created', inject([TransactionViewService], (service: TransactionViewService) => {
    expect(service).toBeTruthy();
  }));
});
