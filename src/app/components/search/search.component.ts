import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/services/filters.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  numberOfProducts: number = 0;
  search = '';
  constructor(
    private productsService: ProductsService,
    private filtersService: FiltersService
  ) {
    this.filtersService.search.subscribe((search) => (this.search = search));
  }

  ngOnInit(): void {
    this.productsService.totalNumberOfProducts.subscribe((numberOfProducts) => {
      this.numberOfProducts = numberOfProducts;
    });
  }

  onChange(e: Event) {
    this.filtersService.search.next((e.target as HTMLInputElement).value);
  }
}
