import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DeletePokemonComponent } from './components/delete-pokemon/delete-pokemon.component';
import { FormAddPokemonComponent } from './components/form-add-pokemon/form-add-pokemon.component';

import { FormsModule } from '@angular/forms';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonsComponent,
    AboutUsComponent,
    DeletePokemonComponent,
    FormAddPokemonComponent,
    AddPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
