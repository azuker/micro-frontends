import { Injectable } from '@angular/core';

function createProduct(id, name, description, itemsInStock) {
  const primaryImageUrl = `products/${id}.jpg`;
  return {
    id, name, description, itemsInStock, primaryImageUrl
  };
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    createProduct(1, 'Cool Product', 'Awesome indeed', 3),
    createProduct(2, 'Masks', 'Much needed', 2),
  ];
}
