import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../components/models/Item';
import { City } from '../components/models/City';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  corsUrl = 'https://cors-anywhere.herokuapp.com/';
  searchUrl = 'https://www.metaweather.com/api/location/search/?query=';
  searchByWoeId = 'https://www.metaweather.com/api/location/';

  constructor(private http: HttpClient) { }

  getSearch(searchCityName: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.corsUrl}${this.searchUrl}${searchCityName}`);
  }
  getWeather(searchWoeid: string): Observable<any> {
    return this.http.get(`${this.corsUrl}${this.searchByWoeId}${searchWoeid}`);
  }
}
