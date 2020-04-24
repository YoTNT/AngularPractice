import { TestBed } from '@angular/core/testing';

import { StockpricefinderService } from './stockpricefinder.service';

describe('StockpricefinderService', () => {
  let service: StockpricefinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockpricefinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
