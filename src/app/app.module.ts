import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { productsReducer } from './store/products.reducer';
import { shoppingCartReducer } from './store/shopping-cart.reducer';

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      products: productsReducer,
      shoppingCart: shoppingCartReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
