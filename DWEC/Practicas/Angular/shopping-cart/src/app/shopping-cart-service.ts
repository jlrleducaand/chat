import {CartItem} from "./cart-item";
import {Injectable, Input} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
    cartItems: CartItem[] = [];

    get total(): number {
        return this.cartItems.reduce((acc, { price }) => (acc += price), 0);
    }

    addItem(item: CartItem): void {
        this.cartItems = [...this.cartItems, item];
    }

    deleteItem(itemToDelete: CartItem): void {
        this.cartItems = this.cartItems.filter((item) => item !== itemToDelete);
    }

    get ItemsCount(): number {
        return this.cartItems.length;
    }

}
