import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './services/weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherServiceService){} 
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'weatherApp';
}
