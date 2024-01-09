import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {PokeBuildPokemon} from "../types";
import {PokemonCardComponent} from "../pokemon-card/pokemon-card.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PokemonCardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  pokemonToSearch = new FormControl();
  pokemonsList : PokeBuildPokemon[] = [];
  setLoading : boolean = false;
  searchPokemon() {
    if (this.pokemonToSearch.value.length < 3){
      this.pokemonsList = [];
      return;
    }
    this.setLoading = true;
    fetch("https://pokebuildapi.fr/api/v1/pokemon").then(r => r.json()).then(data => {
      this.pokemonsList = data;
      this.pokemonsList = this.pokemonsList.filter(pokemon => pokemon.name.toLowerCase().includes(this.pokemonToSearch.value));
    }).finally(() => this.setLoading = false);
  }
}
