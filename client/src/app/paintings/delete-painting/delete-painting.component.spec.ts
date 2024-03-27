import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePaintingComponent } from './delete-painting.component';

describe('DeletePaintingComponent', () => {
  let component: DeletePaintingComponent;
  let fixture: ComponentFixture<DeletePaintingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePaintingComponent]
    });
    fixture = TestBed.createComponent(DeletePaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
