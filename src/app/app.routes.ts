import { Routes } from '@angular/router';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CardsComponent } from './pages/cards/cards.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ImagesComponent } from './pages/images/images.component';
import { TextsComponent } from './pages/texts/texts.component';
import { BackgroundsComponent } from './pages/backgrounds/backgrounds.component';
import { SpinnersComponent } from './pages/spinners/spinners.component';

export const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'texts', component: TextsComponent },
  { path: 'backgrounds', component: BackgroundsComponent },
  { path: 'spinners', component: SpinnersComponent },
];
