import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonsListComponent} from "../pokemons-list/pokemons-list.component";

@Component({
  selector: 'app-generation-8',
  standalone: true,
  imports: [CommonModule, PokemonsListComponent],
  templateUrl: './generation-8.component.html',
  styleUrl: './generation-8.component.css'
})
export class Generation8Component {
  genUrl: string = "https://pokebuildapi.fr/api/v1/pokemon/generation/8";
}
