import { Injectable } from '@angular/core';
import {PersonaInterface} from "./padre/personaInterface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SolicitanteService {
  imagenes: string[] = ["./assets/imagenes/joven3a.png", "./assets/imagenes/joven3b.png", "./assets/imagenes/joven3c.png"];
  estados: string[] = ["Pedir Turno", "Dejar Cola", "Dejar Turno"];
  solicitantes: PersonaInterface[] = [
      {id: 5, nombre: "Mario"     , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
      {id: 6, nombre: "Duarte"    , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
      {id: 4, nombre: "Carmen"    , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
      {id: 3, nombre: "Ismael"    , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
      {id: 1, nombre: "Jose Luis" , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"},
      {id: 2, nombre: "David"     , imagen: "./assets/imagenes/joven3a.png", estado: "Pedir Turno"}
  ];


  constructor() {

  }

  getSolicitantes(){
    return this.solicitantes
  }







}
