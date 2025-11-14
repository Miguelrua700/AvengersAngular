import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../Models/hero';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../Services/hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;

  constructor(private _service: HeroService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      const heroname = parameters['alias'];
      this._service.getHeroByName(heroname).subscribe(resp => this.hero = resp);
    });
  }
 /*hero: Hero ={
    alias: "BatTux",
    strength: "strong",
    operatingLocation: "Gotham",
    weight: 20,
    height: 87,
    species: "human",
    origin: "Gotham",
    photo: "https://shorturl.at/bJ55Z",
    currentStatus: "Active",
    powerList: [
      {name: "Animal Communication", description: "Understanding animals."},
      {name: "Fearlessness Inducement", description:"Inducing fearlessness in others."}
    ]
  }*/
  //@Input() hero?: Hero;
}
