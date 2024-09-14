import { Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent2 } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent2 },
  { path: 'details/:id', component: DetailsComponent },
];
