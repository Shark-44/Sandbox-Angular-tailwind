import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],  // Importations des composants ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correction ici avec `styleUrls` au lieu de `styleUrl`
})
export class AppComponent {
  title = 'angular-tailwind';
}

