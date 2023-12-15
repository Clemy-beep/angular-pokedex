import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.header.html',
    styleUrls: ['./app.header.css'],
})
export class AppHeader{title = 'app2';}
