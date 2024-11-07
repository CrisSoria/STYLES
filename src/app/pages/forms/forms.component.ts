import { Component } from '@angular/core';
import { GlassEffectLoginComponent } from "./glass-effect-login/glass-effect-login.component";

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [GlassEffectLoginComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

}
