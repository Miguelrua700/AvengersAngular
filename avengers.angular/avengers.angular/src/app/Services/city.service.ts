import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../Models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  theServerURL = "http://localhost:5250/api/Cities/"

  constructor(private webApiClient: HttpClient) { }

  getAllCities() : Observable<City[]> {
    return this.webApiClient.get<City[]>(this.theServerURL);
  }
}
