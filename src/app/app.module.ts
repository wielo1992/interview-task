import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ContinentsComponent } from './components/continents/continents.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { SingleCountryComponent } from './components/single-country/single-country.component';
import { FooterComponent } from './components/wrapper/footer/footer.component';
import { HeaderComponent } from './components/wrapper/header/header.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { ApiServiceComponent } from './services/api-service/api-service.component';
import { LogicServiceComponent } from './services/logic-service/logic-service.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    HeaderComponent,
    FooterComponent,
    ContinentsComponent,
    CountryListComponent,
    SingleCountryComponent,
    ApiServiceComponent,
    LogicServiceComponent,
  ],
  imports: [MatSliderModule, BrowserModule, NgbModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
