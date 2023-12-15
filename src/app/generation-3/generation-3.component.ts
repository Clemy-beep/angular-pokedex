import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from '../pokemons-list/pokemons-list.component';

@Component({
  selector: 'app-generation-3',
  standalone: true,
  imports: [CommonModule, PokemonsListComponent],
  templateUrl: './generation-3.component.html',
  styleUrl: './generation-3.component.css'
})
export class Generation3Component {
  genUrl = "https://pokebuildapi.fr/api/v1/pokemon/generation/3";
}
