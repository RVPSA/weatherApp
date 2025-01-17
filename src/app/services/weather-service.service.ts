import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { weatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor( private http: HttpClient) {}

  getweatherData(cityName: string):Observable<weatherData>{
    return this.http.get<weatherData>(environment.weatherBaseUrl,{
      headers:new HttpHeaders().set(environment.XRapidAPIHostname,environment.XRapidAPIHostvalue)
      .set(environment.XRapidAPIKeyname,environment.XRapidAPIKeyvalue),
      params:new HttpParams().set('q',cityName).set('units','imperial').set('mode','json')
    });
  }
}
