import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../app/models/weather-model';
@Injectable({
  providedIn: 'root',
})
export class WeatherProviderService {
  private weatherURL =
    'https://www.7timer.info/bin/civil.php?lon=100.5&lat=13.7&ac=0&unit=metric&output=json&tzshift=0';
  constructor(public http: HttpClient) {}
  getWeather() {
    return this.http.get<Weather>(this.weatherURL);
  }
}
