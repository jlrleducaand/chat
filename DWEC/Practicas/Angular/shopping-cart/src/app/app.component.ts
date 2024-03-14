import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {ShoppingCartItemComponent} from "./shopping-cart-item/shopping-cart-item.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, ShoppingCartComponent, ShoppingCartItemComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyShop';
}
