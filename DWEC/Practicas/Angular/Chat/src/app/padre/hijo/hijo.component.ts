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

  imagenes:string[] = ["./assets/imagenes/joven3a.png", "./assets/imagenes/joven3b.png", "./assets/imagenes/joven3c.png"]
  estados:string[] = ["Pedir Turno", "Dejar Cola", "Dejar Turno"];

  @Output() evPideTurno: EventEmitter<number> = new EventEmitter<number>();


  ngOnInit(): void {

  }
  pideTurno() {
    this.evPideTurno.emit(this.id);

  }

  verificaTurno(){

  }

  siguienteTurno(){

  }

  salirCola(){

  }

}
