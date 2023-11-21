import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit{


  pokemons = [
    {id:1,nombre:"Pikachu",descripcion:"Electrico", foto:'assets/Pikachu.png'},
    {id:2,nombre:"Charizard",descripcion:"Fuego",foto:'assets/Charizard.png'},
    {id:3,nombre:"Electabuzz",descripcion:"Electrico", foto:'assets/Electabuzz.png'},
    {id:4,nombre:"Chikorita",descripcion:"Planta",foto:'assets/Chikorita.png'},
    {id:5,nombre:"Squirtle",descripcion:"Agua",foto:'assets/Squirtle.png'},
    {id:6,nombre:"Jigglypuff",descripcion:"Electrico", foto:'assets/Jigglypuff.png'},
    {id:7,nombre:"Meowth",descripcion:"Fuego", foto:'assets/Meowth.png'},
    {id:8,nombre:"Psyduck",descripcion:"Electrico",foto:'assets/Psyduck.png'},
    {id:9,nombre:"Onix",descripcion:"Roca",foto:'assets/Onix.png'},
    {id:10,nombre:"Mr Mime",descripcion:"Agua",foto:'assets/Mr Mime.png'}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void { }

  deletePokemon() {
    this.router.navigate(['/DeletePokemonComponent']);
  }

  addPokemon() {
    this.router.navigate(['/FormAddPokemonComponent']);
    }
}
