import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonsListComponent} from "../pokemons-list/pokemons-list.component";

@Component({
  selector: 'app-generation-6',
  standalone: true,
  imports: [CommonModule, PokemonsListComponent],
  templateUrl: './generation-6.component.html',
  styleUrl: './generation-6.component.css'
})
export class Generation6Component {
genUrl : string = "https://pokebuildapi.fr/api/v1/pokemon/generation/6";
}
