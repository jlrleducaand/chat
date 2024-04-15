import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HijoComponent} from "./hijo/hijo.component";
import {JsonPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {PersonaInterface} from "./personaInterface";

@Component({
    selector: 'app-padre',
    standalone: true,
    imports: [
        HijoComponent,
        NgForOf,
        NgIf, JsonPipe, NgClass
    ],
    templateUrl: './padre.component.html',
    styleUrl: './padre.component.css'
})
export class PadreComponent implements OnInit {

    solicitantes: PersonaInterface[] = [
        {id: 1, nombre: "Mario", imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 2, nombre: "Duarte", imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 3, nombre: "Carmen", imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 4, nombre: "Ismael", imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 5, nombre: "Jose Luis", imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 6, nombre: "David", imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"}
    ]
    cola: number[] = [];
    turno: string = "";
    solicitanteRecibido: PersonaInterface | undefined = {} as PersonaInterface;
    estadoSesion: boolean = false;

    @Input() evPidiendoTurno: EventEmitter<number> = new EventEmitter<number>();

    @Output() evAbrir: EventEmitter<boolean> = new EventEmitter<boolean>();

    ngOnInit(): void {
    }
    // prueba de grabacion
    verificaTurno($event: number) {
        this.solicitanteRecibido = this.solicitantes.find(x => x.id === $event.valueOf());
        if (this.solicitanteRecibido) {
            if (this.turno === "") {
                this.turno = this.solicitanteRecibido.nombre;
                console.log("añadido nombre a turno " + this.solicitanteRecibido.id);
                this.solicitanteRecibido.estado = "Terminar Turno";
                this.solicitanteRecibido.imagen = "./assets/imagenes/joven3c.png";

            } else if (!this.cola.includes(this.solicitanteRecibido.id) &&
                this.turno != this.solicitanteRecibido.nombre) {
                this.cola.push(this.solicitanteRecibido.id);
                this.solicitanteRecibido.imagen = "./assets/imagenes/joven3b.png";
                this.solicitanteRecibido.estado = "Salir Cola"
                console.log("Salido de la Cola" + this.solicitanteRecibido);
                console.log(this.cola);

            } else if (this.solicitanteRecibido.nombre === this.turno) {
                this.solicitanteRecibido.imagen = "./assets/imagenes/joven3a.png";
                this.solicitanteRecibido.estado = "Pedir Turno";
                this.turno = this.siguiente(this.cola[0]);
                this.cola.shift();

            } else if (this.solicitanteRecibido.nombre != this.turno && this.cola.includes(this.solicitanteRecibido.id))
            {
                this.solicitanteRecibido.imagen = "./assets/imagenes/joven3a.png";
                this.solicitanteRecibido.estado = "Pedir Turno";
                this.cola = this.cola.filter(id => id !== this.solicitanteRecibido?.id);

            }
        }

    }

    siguiente(id: number) {
        let nombre = "";
        this.solicitantes.forEach((s) => {
            if (s.id === id) {
                nombre = s.nombre;
                s.estado = "Termina Turno"
                s.imagen = "./assets/imagenes/joven3c.png"
                this.solicitanteRecibido = s;

            }
        });
        return nombre;
    }

}
