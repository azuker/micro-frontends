import { Injectable } from '@angular/core';

function createProduct(id, name, description, itemsInStock, primaryImageUrl = 'product.jpg') {
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
    createProduct(2, 'Health Masks', 'Much needed', 2),
  ];
}
