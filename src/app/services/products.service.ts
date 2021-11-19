import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id: string;
  images: string[];
  title: string;
  rating: number;
  price: number;
  category: string;
  brand: string
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>('http://localhost:3001/products')
  }
}
