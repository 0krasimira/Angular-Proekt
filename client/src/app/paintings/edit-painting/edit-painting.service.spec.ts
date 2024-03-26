import { TestBed } from '@angular/core/testing';

import { EditPaintingService } from './edit-painting.service';

describe('EditPaintingService', () => {
  let service: EditPaintingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditPaintingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
