import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './service/weather-service.service';
import { AppModule } from './app.module';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WeatherData } from './models/weather.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppModule,
    CommonModule,
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherServiceService) { }

  cityName: string = 'Aracaju';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response

        console.log(response);
      }
    })
  }


  Clear: string = 'Clear'
  Clouds: string = 'Clouds'
  Drizzle: string = 'Drizzle'
  Mist: string = 'Mist'
  Rain: string = 'Rain'
  Snow: string = 'Snow'

  title = 'OpenWeatherAPI';
}
