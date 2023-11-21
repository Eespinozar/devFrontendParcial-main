import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-add-pokemon',
  templateUrl: './form-add-pokemon.component.html',
  styleUrls: ['./form-add-pokemon.component.css']
})
export class FormAddPokemonComponent {
  nombre: string = '';
  tipo: string = '';
  
  constructor(private router: Router) { }

  enviarDatos() {
    console.log('Usuario:', this.nombre);
    console.log('tipo:', this.tipo);
  }  

  addPokemon() {
    this.router.navigate(['/AddPokemonComponent']);
    }
}
