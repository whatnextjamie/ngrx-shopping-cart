import { createReducer, on } from '@ngrx/store';

import { ProductsApiActions } from './products.actions';
import { Product } from '../product-list/products.model';

export const initialState: ReadonlyArray<Product> = [];

export const productsReducer = createReducer(
  initialState,
  on(
    ProductsApiActions.retrievedProductList,
    (_state, { products }) => products
  )
);
