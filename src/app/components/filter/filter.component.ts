import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { BrandsService } from '../../services/brands.service';
import { FiltersService } from 'src/app/services/filters.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(
    private brandsService: BrandsService,
    private categoriesService: CategoriesService,
    private filtersService: FiltersService
  ) {}
  categories: string[] = [];
  brands: string[] = [];
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
}
