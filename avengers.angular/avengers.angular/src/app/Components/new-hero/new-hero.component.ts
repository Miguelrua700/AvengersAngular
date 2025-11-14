import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../Services/hero.service';
import { CityService } from '../../Services/city.service';
import { City } from '../../Models/city';

@Component({
  selector: 'app-new-hero',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './new-hero.component.html',
  styleUrl: './new-hero.component.css'
})
export class NewHeroComponent {
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
    private location: Location) { }

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
      .subscribe( () => this.location.historyGo(-1) );
    }

    ngOnInit(): void {
    this._cityService
      .getAllCities()
      .subscribe(response => this.allCities = response);
    }
}
