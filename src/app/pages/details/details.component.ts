import { PokeHeaderComponent } from './../../shared/poke-header/poke-header.component';
import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokeApiService } from '../../services/poke-api.service';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HttpClientModule, PokeHeaderComponent, RouterLink, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon() {
    const id = this.activeRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokens(
      `${this.urlPokemon}/${id}`
    );
    const name = this.pokeApiService.apiGetPokens(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe({
      next: (res) => {
        this.pokemon = res;
        this.isLoading = true;
        this.apiError = false;
      },
      error: () => {
        this.apiError = true;
        this.isLoading = false;
      },
    });
  }
}
