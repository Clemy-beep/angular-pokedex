import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {TyradexPokemon} from "../types";
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
  strongestStat : number = 0;
  weakestStat : number = 0;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    fetch(`https://tyradex.vercel.app/api/v1/pokemon/${id}`).then(res => res.json()).then(data => {
      this.pokemon = data;
      this.strongestStat = Math.max(data.stats.atk, data.stats.def, data.stats.hp, data.stats.spe_atk, data.stats.spe_def, data.stats.vit);
      this.weakestStat = Math.min(data.stats.atk, data.stats.def, data.stats.hp, data.stats.spe_atk, data.stats.spe_def, data.stats.vit);
    });
    this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    console.log(this.strongestStat, this.weakestStat)
  }
  toNormalForm(str: string) : string {
    let r = str.toLowerCase();
    r = r.replace(new RegExp("\\s", 'g'),"");
    r = r.replace(new RegExp("[àáâãäå]", 'g'),"a");
    r = r.replace(new RegExp("æ", 'g'),"ae");
    r = r.replace(new RegExp("ç", 'g'),"c");
    r = r.replace(new RegExp("[èéêë]", 'g'),"e");
    r = r.replace(new RegExp("[ìíîï]", 'g'),"i");
    r = r.replace(new RegExp("ñ", 'g'),"n");
    r = r.replace(new RegExp("[òóôõö]", 'g'),"o");
    r = r.replace(new RegExp("œ", 'g'),"oe");
    r = r.replace(new RegExp("[ùúûü]", 'g'),"u");
    r = r.replace(new RegExp("[ýÿ]", 'g'),"y");
    r = r.replace(new RegExp("\\W", 'g'),"");
    return r;
  }
}
