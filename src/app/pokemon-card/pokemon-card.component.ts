import { Component, Input } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink} from "@angular/router";
import {PokeBuildPokemon} from "../types";

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input() pokemon: PokeBuildPokemon = {
    id: 0,
    pokedexId: 0,
    name: '',
    image: '',
    stats: {
      HP: 0,
      attack: 0,
      defense: 0,
      special_attack: 0,
      special_defense: 0,
      speed: 0
    },
    apiTypes: [],
    apiGeneration: 0
  };
}
