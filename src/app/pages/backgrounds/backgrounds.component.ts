import { Component } from '@angular/core';
import { CampoDeEstrellasComponent } from "./campo-de-estrellas/campo-de-estrellas.component";

@Component({
  selector: 'app-backgrounds',
  standalone: true,
  imports: [CampoDeEstrellasComponent],
  templateUrl: './backgrounds.component.html',
  styleUrl: './backgrounds.component.css'
})
export class BackgroundsComponent {

}
