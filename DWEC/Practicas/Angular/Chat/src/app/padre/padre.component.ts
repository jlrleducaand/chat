import {Component, EventEmitter, OnInit} from '@angular/core';
import {HijoComponent} from "./hijo/hijo.component";
import {JsonPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {PersonaInterface} from "./personaInterface";
import {FormsModule} from "@angular/forms";
import {SolicitanteService} from "../solicitante.service";

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


    cola: number[] = [];
    turno: string | undefined = "";
    turnoOcupado:boolean = false;
    colaOcupada: boolean = false;
    evTurnoId: EventEmitter<number> = new EventEmitter<number>();
    personaRecibida: PersonaInterface = {} as PersonaInterface;


    constructor(private solicitanteServices: SolicitanteService) {
    }

    solicitantes = this.solicitanteServices.getSolicitantes();

    ngOnInit(): void {}

    verificaTurno($event: PersonaInterface) {
        if ($event) {
            this.personaRecibida = $event;
            console.log("Entro a verifica Turno de padre")

            // Turno vacio y Cola Vacia
            if (!this.turnoOcupado && !this.colaOcupada) {
                    console.log("la persona entra a turno")
                this.entraEnTurno();

            // Tu eres el Turno,   Sal de turno
            } else if (this.turnoOcupado
                    && this.turno === this.personaRecibida.nombre){
                console.log("Persona quiere abandonar Turno" + this.personaRecibida.nombre)
                this.abandonaTurno();

            // Turno Ocupado por otro  vas a Cola
            } else if (this.turnoOcupado
                    && this.turno !== this.personaRecibida.nombre
                    && !this.cola.includes(this.personaRecibida.id)) {
                console.log("Turno Ocupado por otro  vas a Cola")
                this.entraEnCola()

            // Ya estas en Cola,  Sales de Cola
            } else if (this.turno !== this.personaRecibida.nombre
                    && this.cola.includes(this.personaRecibida.id)){
                this.abandonaCola()
            }
        } else{
            console.log("el evento recibido es indefinido")
        }
    }
    entraEnTurno() {
        console.log("Mi estado todavia es" + this.personaRecibida.estado)
            this.turno = this.personaRecibida.nombre;
            this.compruebaTurno()
            this.evTurnoId.emit(this.personaRecibida.id);

    }
    abandonaTurno(){
        console.log("Abandonando el turno")
        this.turno = "";
        this.compruebaTurno();
        if(this.colaOcupada){
            this.siguiente();
        }
    }
    entraEnCola(){
        this.cola.push(this.personaRecibida.id)
        this.compruebaCola()
    }

    abandonaCola(){
        this.cola = this.cola.filter(x => x !== this.personaRecibida.id)
        this.compruebaCola()
    }

    siguiente(){
        if (this.colaOcupada){
            console.log("la primera persona de la cola es " + this.cola[0])
            let s = this.solicitanteServices.solicitantes.find(s => s.id === this.cola[0])
            console.log("la persona que ocupara el turno es ahora " + s?.nombre)
            if (s) {
                this.turno = s.nombre;
                this.cola.shift();
                this.compruebaTurno();
                this.compruebaCola();
                this.evTurnoId.emit(s.id);
            }
        }else{ console.log("no hay nadie en cola") }
    }

    compruebaCola(){
        this.colaOcupada = this.cola.length > 0;
    }
    compruebaTurno(){
        this.turnoOcupado = this.turno !== "";
    }

}
