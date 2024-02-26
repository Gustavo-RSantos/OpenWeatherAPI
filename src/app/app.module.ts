import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WeatherServiceService } from './service/weather-service.service';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],

  imports: [
    HttpClientModule,
  ],

  providers: [
    WeatherServiceService
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }
