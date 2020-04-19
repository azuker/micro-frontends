import { Component, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-products-list',
  template: `
    <div class="product-list-container">
      <div class="common-card" *ngFor="let p of products">
        <div class="product-card-container">
          <img
            class="product-card-primary-image"
            [src]="p.primaryImageUrl"
            alt="product"
          />
          <div className="product-card-content-container">
            {{p.name}}
          </div>
          <div>
            <button (click)="addToCart.emit(p)">Select</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .product-list-container {
      display: flex;
      flex-wrap: wrap;
    }
    .product-card-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }
    .common-card {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      height: 100px;
      width: 200px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin: 10px;
    }
    .common-card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .product-card-content-container {
      padding: 2px 16px;
    }
    .product-card-primary-image {
      width: 30px;
      height: 30px;
    }
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ProductsListComponent {
  products = products;
  @Output() addToCart = new EventEmitter();
}
