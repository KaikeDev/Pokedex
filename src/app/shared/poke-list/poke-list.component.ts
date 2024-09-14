import { HttpClientModule } from '@angular/common/http';
import { PokeApiService } from './../../services/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss',
})
export class PokeListComponent implements OnInit {
  public getAllPokemons: any;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe((res) => {
      this.getAllPokemons = res.results

    });
  }
}
