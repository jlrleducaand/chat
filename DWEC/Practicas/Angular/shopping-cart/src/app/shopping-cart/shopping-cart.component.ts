import {Component} from '@angular/core';
import {ShoppingCartItemComponent} from "../shopping-cart-item/shopping-cart-item.component";
import {CartItem} from "../cart-item";
import {NgForOf, NgIf} from "@angular/common";
import {ShoppingCartService} from "../shopping-cart-service";
import {getActiveConsumer} from "@angular/core/primitives/signals";

@Component({
    selector: 'app-shopping-cart',
    standalone: true,
    imports: [
        ShoppingCartItemComponent,
        NgForOf,
        NgIf
    ],
    templateUrl: './shopping-cart.component.html',
    styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

constructor(private shoppingCartService: ShoppingCartService) {
}
    showCart: boolean = true;

    get cartItems(){  return this.shoppingCartService.cartItems; }

    get total(){ return this.shoppingCartService.total; }

    addNewCartItem() {
    }

    reverseList() { return this.cartItems.reverse(); }

    reloadFromServer() {
        this.shoppingCartService.cartItems =
        [
            {
                id: 1,
                imageUrl: 'headphones.jpg',
                name: 'Auriculares',
                price: 50
            },
            {
                id: 2,
                imageUrl: 'keyboard.jpg',
                name: 'Teclado',
                price: 60
            },
            {
                id: 3,
                imageUrl: 'monitor.jpg',
                name: 'Monitor HD',
                price: 100
            }
        ]
    }

    deleteItem(itemToDelete: CartItem) {
        this.shoppingCartService.deleteItem(itemToDelete);
    }

    trackByItemId(index: number, item: CartItem): number {
        return item.id;
    }

    protected readonly getActiveConsumer = getActiveConsumer;

    toggleShowList(){
        this.showCart = !this.showCart;
    }
}
