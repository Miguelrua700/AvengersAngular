import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../Models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  theServerURL = "http://localhost:5250/api/Heroes/"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private webApiClient: HttpClient) { }

  getAllHeroes(): Observable<Hero[]> {
    return this.webApiClient.get<Hero[]>(this.theServerURL);
  }

  getHeroByName(name: string): Observable<Hero> {
    return this.webApiClient.get<Hero>(this.theServerURL + name);
  }

  createHero(hero: any): Observable<any> {
    return this.webApiClient.post(this.theServerURL, hero, this.httpOptions);
  }
  
}
