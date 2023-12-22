import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonsListComponent} from "../pokemons-list/pokemons-list.component";

@Component({
  selector: 'app-generation-5',
  standalone: true,
  imports: [CommonModule, PokemonsListComponent],
  templateUrl: './generation-5.component.html',
  styleUrl: './generation-5.component.css'
})
export class Generation5Component {
genUrl = "https://pokebuildapi.fr/api/v1/pokemon/generation/5";
}
