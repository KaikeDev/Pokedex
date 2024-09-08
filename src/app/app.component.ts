import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  HomeComponent2 } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { PokeHeaderComponent } from './shared/poke-header/poke-header.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DetailsComponent, HomeComponent2, PokeHeaderComponent, HttpClientModule],
  template: `

   <router-outlet />

   `,
})
export class AppComponent {
  title = 'pokedex';
}
