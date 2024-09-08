import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-poke-header',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './poke-header.component.html',
  styleUrl: './poke-header.component.scss'
})
export class PokeHeaderComponent {

}
