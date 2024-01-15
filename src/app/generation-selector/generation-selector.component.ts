import {Component, Injectable, Input} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-generation-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './generation-selector.component.html',
  styleUrl: './generation-selector.component.css'
})
export class GenerationSelectorComponent {
  generationNumber: number = 0;

  constructor(private router: Router) {
  }

  changeGeneration(generation: number) {
    if (generation > 1) {
      this.router.navigate([`/generation-${generation}`]);
      this.generationNumber = generation;
    } else
      this.router.navigate(['/']);
  }
}
