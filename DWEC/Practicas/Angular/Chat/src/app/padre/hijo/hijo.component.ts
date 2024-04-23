import {Component, EventEmitter, Input,OnInit, Output} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {PersonaInterface} from "../personaInterface";
import {SolicitanteService} from "../../solicitante.service";

@Component({
    selector: 'app-hijo',
    standalone: true,
    imports: [
        NgOptimizedImage, NgIf
    ],
    templateUrl: './hijo.component.html',
    styleUrl: './hijo.component.css'
})
export class HijoComponent implements OnInit{


    @Input() persona: PersonaInterface = {} as PersonaInterface;
    @Input() solicitantes: PersonaInterface[] = [];

    @Input() evTurnoIdP= new EventEmitter<number>;
    @Output() evPideTurno: EventEmitter<PersonaInterface> = new EventEmitter<PersonaInterface>();

    solicitantesHijo: PersonaInterface[] = [];

    constructor(private solicitanteServices: SolicitanteService) {
        this.solicitantesHijo = this.solicitanteServices.getSolicitantes();
    }

    ngOnInit(){
        this.evTurnoIdP.subscribe((n) => {
            this.verificaTurno(n);
            console.log("evento recibido del padre: " + n);
        });
    }

    botonPulsado(p: PersonaInterface) {
        this.persona = p;
        console.log("Boton Pulsado envio evento a padre")
        if (this.persona.estado === "Pedir Turno") {
                console.log( "Pide Turno la persona: " + this.persona.nombre);
            this.persona.imagen = this.solicitanteServices.imagenes[1];
            this.persona.estado = this.solicitanteServices.estados[1];
            // Esperando para turno
        }else if(this.persona.estado === "Dejar Turno") {
            console.log("Envio al Padre que Quiero Dejar el Turno")
            this.persona.imagen = this.solicitanteServices.imagenes[0];
            this.persona.estado = this.solicitanteServices.estados[0];

        }else if(this.persona.estado === "Dejar Cola") {
            console.log("Dejo la Cola")
            this.persona.imagen = this.solicitanteServices.imagenes[0];
            this.persona.estado = this.solicitanteServices.estados[0];
        }
        console.log(p)
        this.evPideTurno.emit(this.persona);
    }

    verificaTurno(id: number) {
        console.log("verificando si soy el turno: " + this.persona.nombre)

        if (this.persona.id === id) {
                this.persona.imagen = this.solicitanteServices.imagenes[2];
                this.persona.estado = this.solicitanteServices.estados[2];
            console.log("¡¡¡¡ YO SI SOY TURNO !!!!")
            }else{
            console.log("---- YO NO SOY TURNO ----")
            }
    }




}

