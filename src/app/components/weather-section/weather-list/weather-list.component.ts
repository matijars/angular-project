import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { WeatherList } from 'src/app/interface/weather';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
})
export class WeatherListComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  loader!: boolean;
  weatherList: WeatherList = [];

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.loader = true;
    this.weatherService.getWeather().subscribe((res) => {
      this.weatherList = res.list;
      this.loader = false;
    });
  }
}
