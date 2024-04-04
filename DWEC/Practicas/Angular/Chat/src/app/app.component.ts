import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PadreComponent} from "./padre/padre.component";
import {HijoComponent} from "./padre/hijo/hijo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PadreComponent, HijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Chat';
}
