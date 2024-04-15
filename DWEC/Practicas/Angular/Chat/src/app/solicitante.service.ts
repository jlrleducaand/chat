import {Injectable} from '@angular/core';
import {PersonaInterface} from "./padre/personaInterface";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SolicitanteService {

    _solicitantes: PersonaInterface[] = [
        {id: 1, nombre: "Mario", imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 2, nombre: "Duarte", imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 3, nombre: "Carmen", imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 4, nombre: "Ismael", imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 5, nombre: "Jose Luis", imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
        {id: 6, nombre: "David", imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"}
    ]

    _imagenes: string[] = ["./assets/imagenes/joven3a.png", "./assets/imagenes/joven3b.png", "./assets/imagenes/joven3c.png"]
    _estados: string[] = ["Pedir Turno", "Dejar Cola", "Dejar Turno"];

    cola: number[] = [];
    turno: string | undefined = "";
    turnoOcupado: boolean = false;
    colaOcupada: boolean = false;
    personaRecibida: PersonaInterface = {} as PersonaInterface;

    constructor() {
    }



    getAllPersonas(): Observable<PersonaInterface[]> {

        return of(this._solicitantes);
    }

    getAllImagenes(): string[] {
        return  this._imagenes;
    }

    getAllEstados(): string[] {
        return  this._estados;
    }
}