import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonsListComponent} from "../pokemons-list/pokemons-list.component";

@Component({
  selector: 'app-generation-7',
  standalone: true,
  imports: [CommonModule, PokemonsListComponent],
  templateUrl: './generation-7.component.html',
  styleUrl: './generation-7.component.css'
})
export class Generation7Component {
  genUrl : string = "https://pokebuildapi.fr/api/v1/pokemon/generation/7";
}
