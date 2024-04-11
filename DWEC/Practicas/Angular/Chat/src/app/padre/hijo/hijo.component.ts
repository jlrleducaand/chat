import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
export class HijoComponent{
    //
    // imagenes: string[] = ["./assets/imagenes/joven3a.png", "./assets/imagenes/joven3b.png", "./assets/imagenes/joven3c.png"]
    // estados: string[] = ["Pedir Turno", "Dejar Cola", "Dejar Turno"];
    //
    persona: PersonaInterface | undefined = {} as PersonaInterface;
    // turno: string | undefined = "";
    // colaEnHijo: number[] = [];
    //
    @Input() solicitantes: PersonaInterface[] = [];
    @Output() evPulsaBoton: EventEmitter<PersonaInterface> = new EventEmitter<PersonaInterface>();
    //
    //
    // constructor() {
    // }
    //
    // ngOnInit(): void {
    // }
    //
    // pulsaBoton(persona: PersonaInterface) {
    //     this.evPulsaBoton.emit(persona);
    // }
    //
    //
     verificaTurno(persona: PersonaInterface | undefined) {
    //     this.persona = persona;
    //     if (this.persona) {
    //         if (this.turno === "") {
    //             this.persona_A_Turno(persona);
    //
    //         } else if (!this.colaEnHijo.includes(this.persona.id) &&
    //             this.turno != this.persona.nombre) {
    //             this.persona_A_Cola(this.persona);
    //
    //         } else if (this.persona.nombre === this.turno) {
    //             this.dejar_Turno(this.persona);
    //
    //         } else if (this.persona.nombre != this.turno && this.colaEnHijo.includes(this.persona.id)) {
    //             this.dejar_Cola(this.persona);
    //         }
    //     }else{
    //         console.log("Error;  this.persona es undefined")
    //     }
    }
    //
    //
    // persona_A_Turno(persona: PersonaInterface | undefined) {
    //     if (persona) {
    //         this.turno = persona.nombre;
    //         this.persona = persona;
    //         console.log("añadido nombre a turno " + this.persona.nombre);
    //         if (this.persona) {
    //             this.persona.estado = this.estados[2];
    //             this.persona.imagen = this.imagenes[2];
    //             this.pulsaBoton(this.persona)
    //         } else {
    //             console.log("Error: this.persona es undefined")
    //         }
    //     } else {
    //         console.log("Error:  No se recibio parametro persona ")
    //     }
    // }
    //
    // persona_A_Cola(persona: PersonaInterface) {
    //     if (persona) {
    //         this.colaEnHijo.push(persona.id);
    //         this.persona = persona;
    //         if (this.persona) {
    //             this.persona.imagen = this.imagenes[1];
    //             this.persona.estado = this.estados[1];
    //             console.log("Salido de la Cola" + persona.id);
    //             console.log(this.colaEnHijo);
    //             this.pulsaBoton(this.persona);
    //         } else {
    //             console.log("Error;  this.persona es undefined")
    //         }
    //     } else {
    //         console.log("Error: No se recibio parametro persona")
    //     }
    // }
    //
    // dejar_Turno(persona: PersonaInterface) {
    //     if (persona) {
    //         this.persona = persona;
    //         if (this.persona) {
    //             this.persona.imagen = this.imagenes[0];
    //             this.persona.estado = this.imagenes[0];
    //             this.turno = this.siguienteTurno(this.colaEnHijo[0]);
    //             this.colaEnHijo.shift();
    //             this.pulsaBoton(this.persona)
    //         } else {
    //             console.log("Error;  this.persona es undefined")
    //         }
    //     } else {
    //         console.log("Error: No se recibio parametro persona")
    //     }
    // }
    //
    // siguienteTurno(id: number) {
    //     let siguiente = this.solicitantes.find(x => x.id === id);
    //     return siguiente?.nombre;
    // }
    //
    // dejar_Cola(persona: PersonaInterface) {
    //     if (persona) {
    //         this.persona = persona;
    //         if (this.persona) {
    //             this.persona.imagen = this.imagenes[0];
    //             this.persona.estado = this.estados[0];
    //             this.colaEnHijo = this.colaEnHijo.filter(id => id !== persona?.id);
    //             this.pulsaBoton(this.persona)
    //         } else {
    //             console.log("Error;  this.persona es undefined")
    //         }
    //     } else {
    //         console.log("Error: No se recibio parametro persona")
    //     }
    // }
}