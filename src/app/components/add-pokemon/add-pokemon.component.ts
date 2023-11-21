import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent {
  
  constructor(private router: Router) { }

  returnRegistry() {
    this.router.navigate(['/PokemonsComponent']);
  }
}
