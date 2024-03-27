import { TestBed } from '@angular/core/testing';

import { DeletePaintingService } from './delete-painting.service';

describe('DeletePaintingService', () => {
  let service: DeletePaintingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletePaintingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
