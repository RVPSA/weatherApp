import { Component, OnInit } from '@angular/core';
import { weatherData } from './models/weather.model';
import { WeatherServiceService } from './services/weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherServiceService){} 
cityName?:string;
weatherdata?:weatherData;

  ngOnInit(): void {
    this.weatherService.getweatherData('Wellington').subscribe(
      (response)=>{
        this.weatherdata=response;
        console.log(response);
      }
    );
  }

  onsubmit(){}

  title = 'weatherApp';
}
