import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import {PokeBuildPokemon} from "../types";
import {FormsModule} from "@angular/forms";


@Component({
  selector: "app-pokemons-list",
  standalone: true,
  imports: [CommonModule, PokemonCardComponent, FormsModule],
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.css'
})
export class PokemonsListComponent {
  @Input() requestUrl: string = "https://pokebuildapi.fr/api/v1/pokemon/generation/1";
  pokemons: PokeBuildPokemon[] = [];
  order: string =  "id asc";
  ngOnInit(): void {
    fetch(this.requestUrl).then(res => res.json()).then(res => this.pokemons = res);
  }
  orderPokemons(order: string) {
    switch (order) {
      case "id asc":
        this.pokemons.sort((a, b) => a.id - b.id);
        break;
      case "id desc":
        this.pokemons.sort((a, b) => b.id - a.id);
        break;
      case "name asc":
        this.pokemons.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name desc":
        this.pokemons.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "defense asc":
        this.pokemons.sort((a, b) => a.stats.defense - b.stats.defense);
        break;
      case "defense desc":
        this.pokemons.sort((a, b) => b.stats.defense - a.stats.defense);
        break;
      case "attack asc":
        this.pokemons.sort((a, b) => a.stats.attack - b.stats.attack);
        break;
      case "attack desc":
        this.pokemons.sort((a, b) => b.stats.attack - a.stats.attack);
        break;
      case "speed asc":
        this.pokemons.sort((a, b) => a.stats.speed - b.stats.speed);
        break;
      case "speed desc":
        this.pokemons.sort((a, b) => b.stats.speed - a.stats.speed);
        break;
      case "special_defense asc":
        this.pokemons.sort((a, b) => a.stats.special_defense - b.stats.special_defense);
        break;
      case "special_defense desc":
        this.pokemons.sort((a, b) => b.stats.special_defense - a.stats.special_defense);
        break;
      case "special_attack asc":
        this.pokemons.sort((a, b) => a.stats.special_attack - b.stats.special_attack);
        break;
      case "special_attack desc":
        this.pokemons.sort((a, b) => b.stats.special_attack - a.stats.special_attack);
        break;
      case "hp asc":
        this.pokemons.sort((a, b) => a.stats.HP - b.stats.HP);
        break;
      case "hp desc":
        this.pokemons.sort((a, b) => b.stats.HP - a.stats.HP);
        break;
      default:
        this.pokemons.sort((a, b) => a.id - b.id);
        break;
    }
  }
}
