import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonsListComponent} from "../pokemons-list/pokemons-list.component";

@Component({
  selector: 'app-generation-4',
  standalone: true,
  imports: [CommonModule, PokemonsListComponent],
  templateUrl: './generation-4.component.html',
  styleUrl: './generation-4.component.css'
})
export class Generation4Component {
  genUrl = "https://pokebuildapi.fr/api/v1/pokemon/generation/4";
}
