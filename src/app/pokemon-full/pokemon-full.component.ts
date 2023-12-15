import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemon-full',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './pokemon-full.component.html',
  styleUrl: './pokemon-full.component.css'
})
export class PokemonFullComponent {
  pokemon: any = {};
  img: string = '';
  weakestStat: number = 0;
  strongestStat: number = 0;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    fetch(`https://tyradex.vercel.app/api/v1/pokemon/${id}`).then(res => res.json()).then(data => this.pokemon = data);
    this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    this.strongestStat = Math.max(this.pokemon.stats.hp, this.pokemon.stats.attack, this.pokemon.stats.defense, this.pokemon.stats.specialAttack, this.pokemon.stats.specialDefense, this.pokemon.stats.speed);
    this.weakestStat = Math.min(this.pokemon.stats.hp, this.pokemon.stats.attack, this.pokemon.stats.defense, this.pokemon.stats.specialAttack, this.pokemon.stats.specialDefense, this.pokemon.stats.speed);
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
