import { Component } from '@angular/core';
import { BarraProgresoComponent } from "./barra-progreso/barra-progreso.component";

@Component({
  selector: 'app-spinners',
  standalone: true,
  imports: [BarraProgresoComponent],
  templateUrl: './spinners.component.html',
  styleUrl: './spinners.component.css'
})
export class SpinnersComponent {

}
