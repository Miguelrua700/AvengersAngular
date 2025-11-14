import { Component } from '@angular/core';
import { Hero } from '../../Models/hero';
import { HeroService } from '../../Services/hero.service';
import { NgFor, NgIf } from '@angular/common';
import { OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-heroes-listing',
  standalone: true,
  imports: [NgIf, NgFor, RouterOutlet, RouterLink],
  templateUrl: './heroes-listing.component.html',
  styleUrl: './heroes-listing.component.css'
})

export class HeroesListingComponent implements OnInit {

  allHeroes: Hero[] | undefined;
  theSelectedHero: Hero | undefined;
  
  constructor(private _service: HeroService) { }

  ngOnInit(): void {
    this._service.getAllHeroes().subscribe(response => this.allHeroes = response);
  }

  setSelectedHero(heroname: string) {
    this._service.getHeroByName(heroname).subscribe(response => this.theSelectedHero = response);
  }

  reload() : void {
    this._service.getAllHeroes().subscribe(response => this.allHeroes = response);
  }
}
