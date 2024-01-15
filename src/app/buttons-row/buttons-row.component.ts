import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from '../button/button.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-buttons-row',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './buttons-row.component.html',
  styleUrl: './buttons-row.component.css',
})
export class ButtonsRowComponent {
  btnTexts = ["Pokémons", "Recherche"];
  btnHrefs = ["/", "/search"];
}
