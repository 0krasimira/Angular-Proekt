import { TestBed } from '@angular/core/testing';

import { AddPaintingService } from './add-painting.service';

describe('AddPaintingService', () => {
  let service: AddPaintingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPaintingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
