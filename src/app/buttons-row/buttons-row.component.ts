import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-buttons-row',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './buttons-row.component.html',
  styleUrl: './buttons-row.component.css',
})
export class ButtonsRowComponent {
   btnTexts = ["Génération 1", "Génération 2", "Génération 3", "Génération 4", "Génération 5", "Génération 6", "Génération 7", "Génération 8", "Recherche"];
   btnHrefs = ["/", "/generation-2", "/generation-3", "/generation-4", "/generation-5", "/generation-6", "/generation-7", "/generation-8", "/search"];
}
