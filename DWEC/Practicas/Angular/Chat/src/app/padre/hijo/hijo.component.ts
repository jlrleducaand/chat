import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
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



    @Input() persona: PersonaInterface | undefined = {} as PersonaInterface;
    @Input() turnoOcupado: boolean = false;
    @Input() colaOcupada: boolean = false;
    @Input() solicitantes: PersonaInterface[] = [];
    @Input() cola: number[] = [];
    @Input() turno: string | undefined = "";

    @Output() evActualizaTurno: EventEmitter<PersonaInterface> = new EventEmitter<PersonaInterface>();

    solicitantesHijo: PersonaInterface[] = [];
    imagenes: string[] = [];
    estados: string[] = [];

    constructor(private solicitanteService: SolicitanteService) {
        if (this.solicitantes) {
            this.solicitantesHijo = {...this.solicitantes}
        }
    }

    ngOnInit(): void {
        this.imagenes = this.solicitanteService.getAllImagenes();
        this.estados = this.solicitanteService.getAllEstados();
    }

    botonPulsado() {
        this.evActualizaTurno.emit(this.persona);
    }

    verificaTurno(persona: PersonaInterface | undefined) {
            if (persona !== undefined) {
                this.persona = persona

                console.log("Entro en verificar turno: " + persona.nombre)

                // A Turno Si turno y cola vacias
                if (!this.turnoOcupado && !this.colaOcupada) {
                    console.log("Entra a Turno: " + persona.nombre);
                    console.log("Estado de la Cola: " + this.cola);
                    console.log("Turno antes de metodo:" + this.turnoOcupado)

                    this.persona = persona;
                    this.persona_A_Turno();

                    // Deja el turno si eres Turno  y  reemplaza turno
                } else if (this.turnoOcupado
                    && this.turno === persona.nombre) {
                    console.log("Persona Deja Turno: " + this.turno)

                    this.dejar_Turno();

                    // A Cola si no estas ya en ella
                } else if (!this.cola.includes(persona.id)
                    && this.turno != persona.nombre) {
                    console.log("Entra en A cola: " + persona.id)

                    this.persona_A_Cola()

                    // Abandona la cola sin ir a turno
                } else if (this.cola.includes(persona.id)) {
                    this.dejar_Cola(persona.id)
                }
            }else{
                console.log("persona recibida undefined")
            }
    }

    persona_A_Turno() {
        if (this.persona !== undefined) {
            this.persona.estado = this.estados[2];
            this.persona.imagen = this.imagenes[2];
            this.turno = this.persona.nombre;
        }
        this.botonPulsado()
    }

    dejar_Turno() {
        if (this.persona !== undefined) {
            this.persona.imagen = this.imagenes[0];
            this.persona.estado = this.estados[0];
            console.log(this.persona.imagen)
            console.log("envio al padre la persona que deja el turno: " + this.persona.nombre + "--")

        }
        this.turnoOcupado = false;
        this.turno = "";


        // Sustituir a Turno
        if (!this.colaOcupada) {
            console.log("cola ocupada " + this.colaOcupada)
            this.siguiente_A_Turno()
        } else {
            this.botonPulsado()
        }
    }

    siguiente_A_Turno() {
        this.persona = this.solicitantes.find(x => x.id === this.cola[0]);
        if (this.persona !== undefined) {
            this.persona.estado = this.estados[2];
            this.persona.imagen = this.imagenes[2];
            this.turno = this.persona.nombre;
        }
        this.cola.shift();

        this.botonPulsado();
    }

    persona_A_Cola() {
        console.log("Entro en Persona a cola " + this.persona!.nombre);
        if (this.persona !== undefined) {
            this.persona.imagen = this.imagenes[1];
            this.persona.estado = this.estados[1];
        }
        this.cola.push(this.persona!.id);

        console.log("El usuario ya está en la Cola: " + this.cola);

        this.botonPulsado();
    }

    dejar_Cola(id: number){
        this.cola = this.cola.filter(x => x !== this.persona?.id);
        this.botonPulsado()
    }


}

