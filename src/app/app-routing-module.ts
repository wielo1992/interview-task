import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentsComponent } from './components/continents/continents.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { SingleCountryComponent } from './components/single-country/single-country.component';

const appRoutes: Routes = [
  { path: '', component: ContinentsComponent },
  { path: 'country-list', component: CountryListComponent },
  { path: 'single-country', component: SingleCountryComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
