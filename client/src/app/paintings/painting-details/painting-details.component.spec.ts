import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Painting } from 'src/app/types/painting';

describe('PaintingDetailsComponent', () => {
  let component: PaintingDetailsComponent;
  let fixture: ComponentFixture<PaintingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaintingDetailsComponent]
    });
    fixture = TestBed.createComponent(PaintingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
