import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: "app-pokemons-list",
  standalone: true,
  imports: [CommonModule, PokemonCardComponent],
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.css'
})
export class PokemonsListComponent {
  @Input() requestUrl: string = "https://pokebuildapi.fr/api/v1/pokemon/generation/1";
  pokemons: any
  ngOnInit(): void {
   fetch(this.requestUrl).then(res => res.json()).then(res => this.pokemons = res);
  }
}
