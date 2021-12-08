import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  api_key = '0424dd4dd8359bde0849ba460199f81c';

  constructor(private http: HttpClient) {}

  getWeather(): Observable<any> {
    let url = `https://api.openweathermap.org/data/2.5/group?id=2643743,3128760,524894,3169070,264371,5128638,1850147,792680&units=metric&appid=${this.api_key}`;

    return this.http.get<any>(url);
  }

  getForecast(id: string): Observable<any> {
    let url = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${this.api_key}`;

    return this.http.get<any>(url);
  }
}
