import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectProducts, selectShoppingCart } from './store/products.selectors';
import { ProductsActions, ProductsApiActions } from './store/products.actions';
import { ProductsService } from './product-list/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products$ = this.store.select(selectProducts);
  shoppingCart$ = this.store.select(selectShoppingCart);

  onAdd(productId: string) {
    this.store.dispatch(ProductsActions.addProduct({ productId }));
  }

  onRemove(productId: string) {
    this.store.dispatch(ProductsActions.removeProduct({ productId }));
  }

  constructor(private productsService: ProductsService, private store: Store) {}

  //TODO: handle this with NgRx Effects
  ngOnInit() {
    this.productsService
      .getProducts()
      .subscribe((products) =>
        this.store.dispatch(
          ProductsApiActions.retrievedProductList({ products })
        )
      );
  }
}
