import { Injectable } from '@angular/core';
import {PersonaInterface} from "./padre/personaInterface";

@Injectable({
  providedIn: 'root'
})
export class SolicitanteService {

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

  constructor() { }
}
