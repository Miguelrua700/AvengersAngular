// CORREÇÃO: Importar o 'Location' e 'CommonModule'
import { NgFor, NgIf, CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core'; // CORREÇÃO: Importar OnInit
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../Services/hero.service';
import { CityService } from '../../Services/city.service';
import { City } from '../../Models/city';

@Component({
  selector: 'app-new-hero',
  standalone: true,
  // CORREÇÃO: Adicionar CommonModule aos imports
  imports: [CommonModule, NgFor, NgIf, FormsModule],
  templateUrl: './new-hero.component.html',
  styleUrl: './new-hero.component.css'
})
// CORREÇÃO: Implementar a interface OnInit
export class NewHeroComponent implements OnInit {
  allCities: City[] | undefined;

  name: string = "";
  strength: string = "";
  city: string = "";
  weight: string = "";
  height: string = "";
  species: string = "";
  origin: string = "";
  photo: string = "";

  constructor(
    private _heroService: HeroService,
    private _cityService: CityService,
    private location: Location // Agora o 'Location' está importado
  ) { }

  createHero(): void {
    let theNewHero = {
      alias: this.name,
      strength: this.strength,
      operatingLocation: this.city,
      weight: parseFloat(this.weight),
      height: parseFloat(this.height),
      photo: this.photo,
      currentStatus: "Active"
    };

    this._heroService
      .createHero(theNewHero)
      // CORREÇÃO: O método correto é 'back()', não 'historyGo()'
      .subscribe( () => this.location.back() );
    }

    // A função 'ngOnInit' deve estar aqui
    ngOnInit(): void {
    this._cityService
      .getAllCities()
      .subscribe(response => this.allCities = response);
    }
}