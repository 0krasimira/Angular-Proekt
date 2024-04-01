import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPaintingsComponent } from './search-paintings.component';

describe('SearchComponent', () => {
  let component: SearchPaintingsComponent;
  let fixture: ComponentFixture<SearchPaintingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPaintingsComponent]
    });
    fixture = TestBed.createComponent(SearchPaintingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
