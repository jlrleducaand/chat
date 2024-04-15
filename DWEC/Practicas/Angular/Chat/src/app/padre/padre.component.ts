import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HijoComponent} from "./hijo/hijo.component";
import {JsonPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {PersonaInterface} from "./personaInterface";
import {FormsModule} from "@angular/forms";
import {SolicitanteService} from "../solicitante.service";
import {Observable} from "rxjs";

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
    solicitantes:PersonaInterface[] = [];
    cola: number[] = [];
    turno: string | undefined = "";
    turnoOcupado:boolean = false;
    colaOcupada: boolean = false;
    personaRecibida: PersonaInterface = {} as PersonaInterface;

    constructor(private  solicitanteService: SolicitanteService) {
    }

    ngOnInit(): void {
        this.obtenerSolicitantes();
    }

    verificaTurno($event: PersonaInterface) {
        if ($event) {
            this.personaRecibida = $event;

            if (this.personaRecibida.estado === "Dejar Turno") {
                console.log("entra en if 1");
                this.entraEnTurno();
            } else if (this.personaRecibida.estado === "Pedir Turno"
                && this.turno === this.personaRecibida.nombre) {
                this.abandonaTurno();
            } else if (this.personaRecibida.estado === "Pedir Turno"
                && this.turno !== this.personaRecibida.nombre) {
                this.entraEnCola()
            } else {
                this.abandonaCola()
            }
        } else{
            console.log("el evento recibido es indefinido")
        }
    }
    entraEnTurno() {
        console.log(this.personaRecibida.estado)
            this.turno = this.personaRecibida.nombre;
            this.turnoOcupado = true;

    }
    abandonaTurno(){
        this.turno = "";
        this.turnoOcupado = false;

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

    obtenerSolicitantes(){
        this.solicitanteService.getAllPersonas()
            .subscribe(solicitantes => this.solicitantes = solicitantes)
    }

}
