import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from "../cart-item";

@Component({
  selector: 'app-shopping-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart-item.component.html',
  styleUrl: './shopping-cart-item.component.css'
})
export class ShoppingCartItemComponent implements OnInit{

 @Input() cartItem: CartItem ={} as CartItem;
 @Output() cartItemDelete = new EventEmitter<void>();

 constructor() {}

 ngOnInit() {}

    onDeleteClicked(): void{
     this.cartItemDelete.emit();

    }
}
