import { Injectable } from '@angular/core';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  currentPage = new BehaviorSubject<number>(1);
  search = new BehaviorSubject<string>('');
  brands = new BehaviorSubject<string[]>([]);
  categories = new BehaviorSubject<string[]>([]);
  priceRange = new BehaviorSubject<[number, number]>([0, 85000]);
  ratingRange = new BehaviorSubject<[number, number]>([0, 5]);

  filters = merge(
    this.currentPage,
    this.search,
    this.brands,
    this.categories,
    this.priceRange,
    this.ratingRange
  ).pipe(
    map(() => ({
      currentPage: this.currentPage.getValue(),
      search: this.search.getValue(),
      brands: this.brands.getValue(),
      categories: this.categories.getValue(),
      priceRange: this.priceRange.getValue(),
      ratingRange: this.ratingRange.getValue(),
    }))
  );

  constructor() {
    merge(
      this.search,
      this.brands,
      this.categories,
      this.priceRange,
      this.ratingRange
    ).subscribe(() => {
      this.currentPage.next(1);
    });
  }

  reset() {
    this.currentPage.next(1);
    this.search.next('');
    this.brands.next([]);
    this.categories.next([]);
    this.priceRange.next([0, 85000]);
    this.ratingRange.next([0, 5]);
  }
}
