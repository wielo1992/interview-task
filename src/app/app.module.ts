import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HeaderComponent } from './components/wrapper/header/header.component';
import { FooterComponent } from './components/wrapper/footer/footer.component';
import { ContinentsComponent } from './components/continents/continents.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { SingleCountryComponent } from './components/single-country/single-country.component';
import { ApiServiceComponent } from './services/api-service/api-service.component';
import { LogicServiceComponent } from './services/logic-service/logic-service.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    LogicServiceComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
