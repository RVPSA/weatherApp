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
cityName :string = 'Colombo';
weatherdata?:weatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName='';
  }

  onsubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';
  }

  private getWeatherData(cityName:string){
    this.weatherService.getweatherData(cityName).subscribe(
      (response)=>{
        this.weatherdata=response;
        console.log(response);
      }
    );
  }

  title = 'weatherApp';
}
