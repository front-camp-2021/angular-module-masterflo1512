import { Component, OnInit } from '@angular/core';
import { ChangeContext } from '@angular-slider/ngx-slider';
import { CategoriesService } from 'src/app/services/categories.service';
import { BrandsService } from 'src/app/services/brands.service';
import { FiltersService } from 'src/app/services/filters.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  categories: string[] = [];
  brands: string[] = [];

  priceSliderOptions = {
    floor: 0,
    ceil: 85000,
  };

  ratingSliderOptions = {
    step: 0.1,
    floor: 0,
    ceil: 5,
  };

  constructor(
    private brandsService: BrandsService,
    private categoriesService: CategoriesService,
    public filtersService: FiltersService
  ) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
    this.brandsService.getBrands().subscribe((brands) => {
      this.brands = brands;
    });
  }

  onBrandsChange(brands: string[]) {
    this.filtersService.brands.next(brands);
  }

  onCategoriesChange(categories: string[]) {
    this.filtersService.categories.next(categories);
  }

  onPriceChanged({ value, highValue }: ChangeContext) {
    this.filtersService.priceRange.next([value, highValue || 85000]);
  }

  onRatingChanged({ value, highValue }: ChangeContext) {
    this.filtersService.ratingRange.next([value, highValue || 85000]);
  }

  clearFilters() {
    this.filtersService.reset();
  }
}
