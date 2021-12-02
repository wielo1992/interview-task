import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { ContinentsComponent } from './components/continents/continents.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { SingleCountryComponent } from './components/single-country/single-country.component';
import { DialogContentComponent } from './components/wrapper/dialog-content/dialog-content.component';
import { FooterComponent } from './components/wrapper/footer/footer.component';
import { HeaderComponent } from './components/wrapper/header/header.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    HeaderComponent,
    FooterComponent,
    ContinentsComponent,
    CountryListComponent,
    SingleCountryComponent,
    DialogContentComponent,
  ],
  imports: [
    MatDialogModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSliderModule,
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
