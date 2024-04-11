import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SolicitanteInterface} from "./solicitanteInterface";
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

    solicitantes: SolicitanteInterface[] = [
        {id: 1, nombre: "Mario"     , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 2, nombre: "Duarte"    , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 3, nombre: "Carmen"    , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 4, nombre: "Ismael"    , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 5, nombre: "Jose Luis" , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 6, nombre: "David"     , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"}
    ]
    cola: number[] = [];
    turno: string = "";
    personaRecibida: PersonaInterface | undefined = {} as SolicitanteInterface;
    estadoSesion: boolean = false;

    evActualizaSolicitantes: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit(): void {
    }

    verificaTurno($event: PersonaInterface) {
        this.personaRecibida = $event;
        if (this.personaRecibida.estado === "Dejar Turno"){
            this.turno = this.personaRecibida.nombre;
        }else if(this.personaRecibida.estado === "Dejar Cola"){
            this.cola.push(this.personaRecibida.id);
        }else if(this.personaRecibida.estado === "Pedir Turno"){
            this.cola = this.cola.filter(id => id !== this.personaRecibida?.id);
        }

    }

    siguiente(id: number) {
        let nombre = "";
        this.solicitantes.forEach((s) => {
            if (s.id === id) {
                nombre = s.nombre;
                s.estado = "Termina Turno"
                s.imagen = "./assets/imagenes/joven3c.png"
                this.personaRecibida = s;

            }
        });
        return nombre;
    }




}
