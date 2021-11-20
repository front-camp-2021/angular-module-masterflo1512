import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLisComponent } from './filter-list.component';

describe('FilterLisComponent', () => {
  let component: FilterLisComponent;
  let fixture: ComponentFixture<FilterLisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterLisComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
