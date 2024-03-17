import { TestBed } from '@angular/core/testing';

import { PaintingDetailsService } from './painting-details.service';

describe('PaintingDetailsService', () => {
  let service: PaintingDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaintingDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
