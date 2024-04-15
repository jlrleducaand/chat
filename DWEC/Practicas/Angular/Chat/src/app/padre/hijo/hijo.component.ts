import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {PersonaInterface} from "../personaInterface";

@Component({
    selector: 'app-hijo',
    standalone: true,
    imports: [
        NgOptimizedImage, NgIf
    ],
    templateUrl: './hijo.component.html',
    styleUrl: './hijo.component.css'
})
export class HijoComponent implements OnInit {

    imagenes: string[] = ["./assets/imagenes/joven3a.png", "./assets/imagenes/joven3b.png", "./assets/imagenes/joven3c.png"]
    estados: string[] = ["Pedir Turno", "Dejar Cola", "Dejar Turno"];

    @Input() persona: PersonaInterface | undefined = {} as PersonaInterface;
    @Input() personaTurno: string | undefined = "";
    @Input() turnoOcupado: boolean = false;
    @Input() colaOcupada: boolean = false;
    @Input() cola: number[] = [];
    @Input() solicitantes: PersonaInterface[] = [];


    @Output() evActualizaTurno: EventEmitter<PersonaInterface> = new EventEmitter<PersonaInterface>();

    solicitantesHijo: PersonaInterface[] = [];
    personaHijo: PersonaInterface | undefined = {} as PersonaInterface;

    constructor() {
        if (this.solicitantes) {
            this.solicitantesHijo = {...this.solicitantes}
        }
    }

    ngOnInit(): void {
        // aseguramos de estar actualizado el personajeHijo
        if (this.persona) {
            this.personaHijo = {...this.persona}
        }
    }


    botonPulsado() {
        this.evActualizaTurno.emit(this.persona);
    }

    verificaTurno(persona: PersonaInterface | undefined) {
        console.log("Entro en verificar turno: " + this.personaHijo!.nombre)

        // A Turno Si turno y cola vacias
        if (!this.turnoOcupado && !this.colaOcupada) {
            console.log("Entra a Turno: " + persona?.nombre);
            console.log("Estado de la Cola: " + this.cola);
            console.log("Turno:" + this.turnoOcupado)

            this.persona_A_Turno();

            // Deja el turno si eres Turno  y  reemplaza turno
        } else if (this.turnoOcupado
            && this.personaTurno === this.personaHijo?.nombre) {
            console.log("Persona Deja Turno: " + this.personaTurno)

            this.dejar_Turno();

            // A Cola si no estas ya en ella
        } else if (!this.cola.includes(this.personaHijo!.id)
            && this.personaTurno != this.personaHijo!.nombre) {
            console.log("Entra en A cola: " + this.personaHijo!.id)

            this.persona_A_Cola()

            // Abandona la cola sin ir a turno
        } else if(this.cola.includes(this.personaHijo!.id)) {
            this.dejar_Cola(this.personaHijo!.id)
        }
    }


    persona_A_Turno() {
        this.personaHijo!.estado = this.estados[2];
        this.personaHijo!.imagen = this.imagenes[2];
        this.personaTurno = this.personaHijo?.nombre;

        this.botonPulsado()
    }

    dejar_Turno() {
        this.personaHijo!.imagen = this.imagenes[0];
        this.personaHijo!.estado = this.estados[0];
        this.turnoOcupado = false;
        this.personaTurno = "";

        console.log("envio al padre la persona que deja el turno: " + this.persona?.nombre + "--")

        // Sustituir a Turno
        if (!this.colaOcupada) {
            console.log("cola ocupada " + this.colaOcupada)
            this.siguiente_A_Turno()
        } else {
            this.botonPulsado()
        }
    }

    siguiente_A_Turno() {
        this.personaHijo = this.solicitantes.find(x => x.id === this.cola[0]);
        this.personaHijo!.estado = this.estados[2];
        this.personaHijo!.imagen = this.imagenes[2];
        this.personaTurno = this.personaHijo?.nombre;
        this.cola.shift();

        this.botonPulsado();
    }

    persona_A_Cola() {
        console.log("Entro en Persona a cola " + this.personaHijo!.nombre);
        this.personaHijo!.imagen = this.imagenes[1];
        this.personaHijo!.estado = this.estados[1];
        console.log("Cola antes de añadir: " + this.cola);
        this.cola.push(this.personaHijo!.id);

        console.log("El usuario ya está en la Cola: " + this.cola);

        this.botonPulsado();
    }

    dejar_Cola(id: number){
        this.cola = this.cola.filter(x => x !== this.personaHijo?.id);
        this.botonPulsado()
    }
}

