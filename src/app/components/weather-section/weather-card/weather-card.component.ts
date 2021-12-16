import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() weather: any;

  loader!: boolean;
  hours = Array();
  hoursTemp = Array();
  showWeatherForecast!: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  getForecast(eventTarget: any) {
    this.loader = true;
    const weatherId = eventTarget.id;
    this.hours = [];
    this.hoursTemp = [];

    this.showWeatherForecast = weatherId;

    this.weatherService.getForecast(weatherId).subscribe((res) => {
      this.loader = false;
      let hours = res.list.slice(0, 4);

      hours.map((hour: any) => {
        let fullTime = hour.dt_txt;
        let fullHour = fullTime.substring(11);
        let time = fullHour.substring(0, fullHour.length - 3);
        let temp = hour.main.temp;

        this.hours.push(time);
        this.hoursTemp.push(temp.toFixed());
      });
    });
  }
}
