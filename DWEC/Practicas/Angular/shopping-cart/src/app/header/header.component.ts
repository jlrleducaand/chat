import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ShoppingCartService} from "../shopping-cart-service";
import {NgForOf, NgIf} from "@angular/common";
import {ShoppingCartItemComponent} from "../shopping-cart-item/shopping-cart-item.component";
import {CatalogProductService} from "../catalog-product-service";
import {CartItem} from "../cart-item";
import {CatalogProductComponent} from "../catalog-product/catalog-product.component";
import {ShoppingCartComponent} from "../shopping-cart/shopping-cart.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ShoppingCartItemComponent,
    CatalogProductComponent,
    ShoppingCartComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  @Output() toggleCartVisibility = new EventEmitter<any>();

  showCart: boolean = true;

  constructor(protected miCartService: ShoppingCartService, protected miCatService: CatalogProductService) {}

  ngOnInit(): void {};

  get itemCount(): number{    return this.miCartService.ItemsCount;  }

  onCartClicked(){  }

  toggleShowList(){    this.showCart = !this.showCart;  }

  trackByItemId(index: number, item: CartItem): number {    return item.id;  }

}
