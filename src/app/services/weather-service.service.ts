import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor( private http: HttpClient) {}

  getweatherData(cityName: string){
    this.http.get(environment.weatherBaseUrl,{
      headers:new HttpHeaders().set(environment.XRapidAPIHostname,environment.XRapidAPIHostvalue)
      .set(environment.XRapidAPIKeyname,environment.XRapidAPIKeyvalue),
      params:new HttpParams().set('q',cityName).set('units','imperial').set('mode','json')
    });
  }
}
