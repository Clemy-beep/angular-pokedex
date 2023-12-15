import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './app.header';
import { ButtonsRowComponent } from './buttons-row/buttons-row.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppHeader, ButtonsRowComponent, PokemonsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
