import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {PokemonResistance, TyradexPokemon} from "../types";

@Component({
  selector: 'app-pokemon-full',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './pokemon-full.component.html',
  styleUrl: './pokemon-full.component.css'
})
export class PokemonFullComponent {
  pokemon: TyradexPokemon = {
    egg_groups: [],
    resistances: [{multiplier: 0, name: ""}],
    sexe: {female: 0, male: 0},
    stats: {atk: 0, def: 0, hp: 0, spe_atk: 0, spe_def: 0, vit: 0},
    pokedexId: 0,
    name:
      {
        fr: '',
        en: '',
        jp: ''
      },
    types: [
      {
        name: '',
        image: ''
      }
    ],
    category: '',
    talents: [
      {
        name: '',
        tc: false
      }
    ],
  };
  img: string = '';
  strongestStat: number = 0;
  weakestStat: number = 0;
  resistancess: PokemonResistance[] = [];
  weaknesses: PokemonResistance[] = [];
  immunities: PokemonResistance[] = [];

  constructor(private route: ActivatedRoute) {
  }

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    await fetch(`https://tyradex.vercel.app/api/v1/pokemon/${id}`).then(res => res.json()).then(data => {
      this.pokemon = data;
      this.strongestStat = Math.max(data.stats.atk, data.stats.def, data.stats.hp, data.stats.spe_atk, data.stats.spe_def, data.stats.vit);
      this.weakestStat = Math.min(data.stats.atk, data.stats.def, data.stats.hp, data.stats.spe_atk, data.stats.spe_def, data.stats.vit);
      this.resistancess = data.resistances.filter((res: PokemonResistance) => res.multiplier < 1);
      this.weaknesses = data.resistances.filter((weakness: PokemonResistance) => weakness.multiplier > 1);
      this.immunities = data.resistances.filter((immunity: PokemonResistance) => immunity.multiplier == 0);
    });
    this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }

  toNormalForm(str: string): string {
    let typeDictionary: { [key: string]: string } = {
      "fée": "fee",
      "ténèbres": "tenebres",
      "électrik": "electrik"
    }
    return typeDictionary[str.toLowerCase()] || str.toLowerCase();
  }
}
