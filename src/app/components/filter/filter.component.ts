import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private brandsService: BrandsService, private categoriesService: CategoriesService) { }
  categories: string[] = []
  brands: string[] = []
  ngOnInit(): void {

    this.categoriesService.getCategories().subscribe(categories => {
      this.categories = categories
    })
    this.brandsService.getBrands().subscribe(brands => {
      this.brands = brands
    })
  }

}
