import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './poke-search.component.html',
  styleUrl: './poke-search.component.scss'
})
export class PokeSearchComponent {

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  public search(value: string){
   this.emmitSearch.emit(value);
  }
}
