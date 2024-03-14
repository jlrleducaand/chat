import {Injectable} from "@angular/core";
import {CartItem} from "./cart-item";
import {Producto} from "./producto";


@Injectable({  providedIn:'root' })
export class CatalogProductService {

    prodItems: Producto[] = [
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
            name: 'Monitor.jpg',
            price: 100
        }
    ]


}
