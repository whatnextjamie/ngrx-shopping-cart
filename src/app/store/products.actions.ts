import { createActionGroup, props } from '@ngrx/store';

import { Product } from '../product-list/products.model';

export const ProductsActions = createActionGroup({
  source: 'Products',
  events: {
    'Add Product': props<{ productId: string }>(),
    'Remove Product': props<{ productId: string }>(),
  },
});

export const ProductsApiActions = createActionGroup({
  source: 'Products API',
  events: {
    'Retrieved Product List': props<{ products: ReadonlyArray<Product> }>(),
  },
});
