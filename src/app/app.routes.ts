import { Routes } from '@angular/router';
import { Generation2PageComponent } from './generation-2-page/generation-2-page.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { Generation3Component } from './generation-3/generation-3.component';
import {PokemonFullComponent} from "./pokemon-full/pokemon-full.component";
import {Generation4Component} from "./generation-4/generation-4.component";
import {Generation5Component} from "./generation-5/generation-5.component";
import {Generation6Component} from "./generation-6/generation-6.component";
import {Generation7Component} from "./generation-7/generation-7.component";
import {Generation8Component} from "./generation-8/generation-8.component";

export const routes: Routes = [
    { path: '', component: PokemonsListComponent},
    { path: 'generation-2', component: Generation2PageComponent},
    { path: 'generation-3', component: Generation3Component},
    { path: 'pokemon/:id', component: PokemonFullComponent},
    { path: 'generation-4', component: Generation4Component},
    { path: 'generation-5', component: Generation5Component},
    { path: 'generation-6', component: Generation6Component},
    { path: 'generation-7', component: Generation7Component},
    { path: 'generation-8', component: Generation8Component}
];
