import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Generation2PageComponent } from './generation-2-page/generation-2-page.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { Generation3Component } from './generation-3/generation-3.component';
import {PokemonFullComponent} from "./pokemon-full/pokemon-full.component";

export const routes: Routes = [
    { path: '', component: PokemonsListComponent},
    { path: 'generation-2', component: Generation2PageComponent},
    { path: 'generation-3', component: Generation3Component},
    { path: 'pokemon/:id', component: PokemonFullComponent},
];
