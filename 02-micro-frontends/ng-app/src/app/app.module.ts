import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
  ],
  entryComponents: [ProductsListComponent],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(ProductsListComponent, {injector});
    customElements.define('products-list', el);
  }

  ngDoBootstrap() { }
}
