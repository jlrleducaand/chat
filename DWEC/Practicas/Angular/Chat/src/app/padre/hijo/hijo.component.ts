import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent implements OnInit{
  @Input() id:number= 0;
  @Input() nombreHijo: string = "";
  @Input() imagenHijo: string = "";
  @Input() estadoHijo: string = "Pedir Turno"



  @Input() evAbrirPadre: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() evPideTurno: EventEmitter<number> = new EventEmitter<number>();


  ngOnInit(): void {
    this.evAbrirPadre.subscribe(() =>
    console.log("Recibe Abrir o Cerrar"))

  }
  pideTurno() {
    this.evPideTurno.emit(this.id);
  }

}
