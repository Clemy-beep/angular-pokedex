import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from '../pokemons-list/pokemons-list.component';

@Component({
  selector: 'app-generation-2-page',
  standalone: true,
  imports: [CommonModule, PokemonsListComponent],
  templateUrl: './generation-2-page.component.html',
  styleUrl: './generation-2-page.component.css'
})
export class Generation2PageComponent {
  gen2Url = "https://pokebuildapi.fr/api/v1/pokemon/generation/2";
}
