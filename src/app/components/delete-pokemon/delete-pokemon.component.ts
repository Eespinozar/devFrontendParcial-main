import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-pokemon',
  templateUrl: './delete-pokemon.component.html',
  styleUrls: ['./delete-pokemon.component.css']
})
export class DeletePokemonComponent {

  constructor(private router: Router) { }
  
  returnRegistry() {
    this.router.navigate(['/PokemonsComponent']);
  }
}
