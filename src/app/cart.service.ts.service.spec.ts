import { TestBed } from '@angular/core/testing';

import { CartServiceTsService } from './cart.service.ts.service';

describe('CartServiceTsService', () => {
  let service: CartServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
