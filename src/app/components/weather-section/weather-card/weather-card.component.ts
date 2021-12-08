import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() weather: any;
  hours = [];
  hoursTemp = [];
  showWeatherForecast!: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  getForecast(eventTarget: any) {
    const weatherId = eventTarget.id;

    this.showWeatherForecast = weatherId;
    this.hours = [];
    this.hoursTemp = [];

    this.weatherService.getForecast(weatherId).subscribe((res) => {
      console.log(res);
    });
  }
}
