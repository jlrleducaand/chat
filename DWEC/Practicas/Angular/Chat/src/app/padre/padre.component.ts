import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HijoComponent} from "./hijo/hijo.component";
import {JsonPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {PersonaInterface} from "./personaInterface";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-padre',
    standalone: true,
    imports: [
        HijoComponent,
        NgForOf,
        NgIf, JsonPipe, NgClass, FormsModule
    ],
    templateUrl: './padre.component.html',
    styleUrl: './padre.component.css'
})
export class PadreComponent implements OnInit {

    solicitantes: PersonaInterface[] = [
        {id: 1, nombre: "Mario"     , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 2, nombre: "Duarte"    , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 3, nombre: "Carmen"    , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 4, nombre: "Ismael"    , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 5, nombre: "Jose Luis" , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 6, nombre: "David"     , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"}
    ]
    cola: number[] = [];
    turno: string | undefined = "";
    turnoOcupado:boolean = false;
    colaOcupada: boolean = false;
    personaRecibida: PersonaInterface = {} as PersonaInterface;


    ngOnInit(): void {

    }

    verificaTurno($event: PersonaInterface) {
        console.log("log " + $event.nombre)
        this.personaRecibida = $event;

        if (!this.colaOcupada && !this.turnoOcupado){
            this.entraEnTurno();
        } else if (this.personaRecibida.nombre === this.turno){
            this.abandonaTurno();
        } else if (this.turnoOcupado
                   && this.turno !== this.personaRecibida.nombre
                   && !this.cola.includes(this.personaRecibida.id)){
            this.entraEnCola()
        } else {
            this.abandonaCola()
        }
    }

    entraEnTurno() {
            this.turno = this.personaRecibida.nombre;
            this.turnoOcupado = !this.turnoOcupado;

    }
    abandonaTurno(){
        this.turno = "";
        this.turnoOcupado = !this.turnoOcupado;

    }
    entraEnCola(){
        if (this.cola.length > 0){
            this.colaOcupada = true;
        }
    }
    abandonaCola(){
        if (this.cola.length <1){
            this.colaOcupada = false;
        }
    }


}
