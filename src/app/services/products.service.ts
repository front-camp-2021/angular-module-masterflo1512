import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { FiltersService } from './filters.service';

type UnpackObservable<T> = T extends Observable<infer P> ? P : never;

export interface Product {
  id: string;
  images: string[];
  title: string;
  rating: number;
  price: number;
  category: string;
  brand: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  totalNumberOfProducts = new Subject<number>();

  constructor(
    private http: HttpClient,
    private filtersService: FiltersService
  ) {}

  getParams({
    currentPage,
    search,
    brands,
    categories,
    priceRange: [minPrice, maxPrice],
    ratingRange: [minRating, maxRating],
  }: UnpackObservable<typeof FiltersService.prototype.filters>) {
    const params = new HttpParams({
      fromObject: {
        _limit: 10,
        _page: currentPage,
        q: search,
        price_lte: maxPrice,
        price_gte: minPrice,
        rating_lte: maxRating,
        rating_gte: minRating,
        brand: brands,
        category: categories,
      },
    });

    return params;
  }

  getProducts() {
    return this.filtersService.filters.pipe(
      switchMap((filters) => {
        const params = this.getParams(filters);
        return this.http
          .get<Product[]>('http://localhost:3001/products', {
            observe: 'response',
            params,
          })
          .pipe(
            tap((response) => {
              const totalProducts = Number(
                response.headers.get('x-total-count')
              );
              this.totalNumberOfProducts.next(totalProducts);
            }),
            map((response) => response.body || [])
          );
      })
    );
  }
}
