import { Component } from '@angular/core';
import { TresdFlipAnimationComponent } from "./tresd-flip-animation/tresd-flip-animation.component";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [TresdFlipAnimationComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

}
