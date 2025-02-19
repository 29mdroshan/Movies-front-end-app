import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRatingComponent } from './search-rating.component';

describe('SearchRatingComponent', () => {
  let component: SearchRatingComponent;
  let fixture: ComponentFixture<SearchRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
