import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../../app/models/weather-model';
import { WeatherProviderService } from '../weather-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myList = ['Apple', 'Banana', 'Orange'];
  public weather$: Observable<Weather>;
  constructor(private weatherProvider: WeatherProviderService) {
    this.weather$ = this.weatherProvider.getWeather();
  }
}
