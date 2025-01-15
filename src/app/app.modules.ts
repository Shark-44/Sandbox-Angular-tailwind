import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Assure-toi que ce module est importé
import { HeaderComponent } from './core/header/header.component';  // Import de HeaderComponent
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent  // Import direct du HeaderComponent
  ],
  providers: [],
  bootstrap: [] // Pas besoin de déclarer AppComponent ici, car il est standalone
})
export class AppModule {}
