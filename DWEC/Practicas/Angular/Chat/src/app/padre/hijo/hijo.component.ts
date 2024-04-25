import {Component, EventEmitter, Input,OnInit, Output} from '@angular/core';
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
export class HijoComponent implements OnInit{

    imagenes: string[] = ["./assets/imagenes/joven3a.png", "./assets/imagenes/joven3b.png", "./assets/imagenes/joven3c.png"]
    estados: string[] = ["Pedir Turno", "Dejar Cola", "Dejar Turno"];

    @Input() persona: PersonaInterface = {} as PersonaInterface;
    @Input() solicitantes: PersonaInterface[] = [];

    @Input() evTurnoIdP= new EventEmitter<number>;
    @Output() evPideTurno: EventEmitter<PersonaInterface> = new EventEmitter<PersonaInterface>();


    estado:string =this.estados[0];
    imagen:string =this.imagenes[0];
    solicitantesHijo: PersonaInterface[] = [];

    constructor() {
        this.solicitantesHijo = this.solicitantes;
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
        if (this.estado === "Pedir Turno") {
                console.log( "Pide Turno la persona: " + this.persona.nombre);
            this.imagen = this.imagenes[1];
            this.estado = this.estados[1];
            // Esperando para turno
        }else if(this.estado === "Dejar Turno") {
            console.log("Envio al Padre que Quiero Dejar el Turno")
            this.imagen = this.imagenes[0];
            this.estado = this.estados[0];

        }else if(this.estado === "Dejar Cola") {
            console.log("Dejo la Cola")
            this.imagen = this.imagenes[0];
            this.estado = this.estados[0];
        }
        console.log(p)
        this.evPideTurno.emit(this.persona);
    }

    verificaTurno(id: number) {
        console.log("verificando si soy el turno: " + this.persona.nombre)

        if (this.persona.id === id) {
                this.imagen = this.imagenes[2];
                this.estado = this.estados[2];
            console.log("¡¡¡¡ YO SI SOY TURNO !!!!")
            }else{
            console.log("---- YO NO SOY TURNO ----")
            }
    }




}

