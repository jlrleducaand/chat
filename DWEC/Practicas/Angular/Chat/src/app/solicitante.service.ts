import { Injectable } from '@angular/core';
import {PersonaInterface} from "./padre/personaInterface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SolicitanteService {
  imagenes: string[] = []
  estados: string[] = [];
  solicitantes: PersonaInterface[] = [];


  constructor(private http:HttpClient) {

  }

  getSolicitantes(){
    return this.cargaSolicitantes()
  }
  cargaEstados(){
      this.http.get<string[]>('assets/JSON/estados.json').subscribe(
          (data) => {
              this.estados = data;
              console.log('Estados cargados:', this.estados);
          },
          (error) => {
              console.error('Error al cargar estados:', error);
          }
  }

  cargaImagenes(){
      this.http.get<string[]>('assets/JSON/imagenes.json').subscribe(
          (data) => {
              this.imagenes = data;
              console.log('Imagenes cargadas:', this.imagenes);
          },
          (error) => {
              console.error('Error al cargar imagenes:', error);
          }
  }

  cargaSolicitantes(){
  this.http.get<PersonaInterface[]>('assets/JSON/solicitantes.json').subscribe(
      (data) => {
        this.solicitantes = data;
        console.log('Solicitantes cargados:', this.solicitantes);
      },
      (error) => {
        console.error('Error al cargar solicitantes:', error);
      }
  }


}
