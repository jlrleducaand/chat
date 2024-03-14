import { Component, Input} from '@angular/core';
import {Producto} from '../producto'
import {ShoppingCartService} from "../shopping-cart-service";
import {CartItem} from "../cart-item";
import {NgForOf} from "@angular/common";
import {ShoppingCartItemComponent} from "../shopping-cart-item/shopping-cart-item.component";
import {CatalogProductService} from "../catalog-product-service";

@Component({
  selector: 'app-catalog-product',
  standalone: true,
  imports: [
    NgForOf,
    ShoppingCartItemComponent
  ],
  templateUrl: './catalog-product.component.html',
  styleUrl: './catalog-product.component.css'
})
export class CatalogProductComponent {

  @Input() producto: Producto = {} as Producto;

  get miCatalogo() {
    return this.miServicio.prodItems;
  }

  constructor(private miServicio: CatalogProductService, private miCarro: ShoppingCartService ) {}

  addToCart(){
      const item: CartItem = this.mapProductoToCartItem(this.producto);
      this.miCarro.addItem(item);
  }

  mapProductoToCartItem(prod: Producto){
    let cartItem: CartItem = {} as CartItem;
    cartItem.id = prod.id;
    cartItem.name = prod.name;
    cartItem.price = prod.price;
    cartItem.imageUrl = prod.imageUrl;

    return cartItem;
  }
  trackByItemId(index: number, item: CartItem): number {    return item.id;  }

}
