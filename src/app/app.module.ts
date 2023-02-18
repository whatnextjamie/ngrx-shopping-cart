import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { productsReducer } from './store/products.reducer';
import { shoppingCartReducer } from './store/shopping-cart.reducer';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ShoppingCartComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      products: productsReducer,
      shoppingCart: shoppingCartReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
