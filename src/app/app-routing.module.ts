import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DeletePokemonComponent } from './components/delete-pokemon/delete-pokemon.component';
import { FormAddPokemonComponent } from './components/form-add-pokemon/form-add-pokemon.component';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';

const routes: Routes = [
  {path:"aboutUs", component: AboutUsComponent},
  {path:"PokemonsComponent", component:PokemonsComponent},
  {path:"DeletePokemonComponent", component: DeletePokemonComponent},
  {path:"FormAddPokemonComponent", component:FormAddPokemonComponent},
  {path:"AddPokemonComponent", component:AddPokemonComponent},
  {path:"**", component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
