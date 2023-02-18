import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from './products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products: ReadonlyArray<Product> = [];
  @Output() add = new EventEmitter<string>();
}
