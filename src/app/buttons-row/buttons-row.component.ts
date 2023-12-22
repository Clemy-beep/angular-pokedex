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
   btnTexts = ["Generation 1", "Generation 2", "Generation 3", "Generation 4", "Generation 5", "Generation 6", "Generation 7", "Generation 8"];
   btnHrefs = ["/", "/generation-2", "/generation-3", "/generation-4", "/generation-5", "/generation-6", "/generation-7", "/generation-8"];
}
