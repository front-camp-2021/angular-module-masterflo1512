import { Component, OnInit, Input } from '@angular/core';
import { FiltersService } from 'src/app/services/filters.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  numberOfPages: number[] = [];
  pages: number = 0;
  currentPage = 1;

  constructor(
    private productsService: ProductsService,
    private filtersService: FiltersService
  ) {
    this.filtersService.currentPage.subscribe((page) => {
      this.currentPage = page;
    });
  }

  ngOnInit(): void {
    this.productsService.totalNumberOfProducts.subscribe((numberOfProducts) => {
      this.pages = Math.ceil(numberOfProducts / 10);
      this.numberOfPages = Array.from({ length: this.pages }).map(
        (_, i) => i + 1
      );
    });
  }

  setCurrentPage(event: Event, page: number) {
    event.preventDefault();
    this.filtersService.currentPage.next(page);
  }

  goToTheNextPage() {
    this.filtersService.currentPage.next(this.currentPage + 1);
  }

  goToThePreviousPage() {
    this.filtersService.currentPage.next(this.currentPage - 1);
  }
}
