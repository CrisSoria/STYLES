// https://www.youtube.com/watch?v=yOmxW7wL7_o
import { Component } from '@angular/core';

@Component({
  selector: 'app-tresd-flip-animation',
  standalone: true,
  imports: [],
  templateUrl: './tresd-flip-animation.component.html',
  styleUrl: './tresd-flip-animation.component.css',
})
export class TresdFlipAnimationComponent {
  isActive = false;
  btnOneClick() {
    this.isActive = true;
  }
  btnTwoClick() {
    this.isActive = false;
  }
}
