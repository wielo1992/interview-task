import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country, Regions } from '../models/country-model';
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private readonly http: HttpClient, private router: Router) {}

  private readonly selectedCountry = new BehaviorSubject<Country>(null);
  readonly selectedCountry$ = this.selectedCountry.asObservable();

  private readonly countryList = new BehaviorSubject<Country[]>([]);
  readonly contryList$ = this.countryList.asObservable();

  private readonly countryListByRegion = new BehaviorSubject<Country[]>([]);
  readonly countryListByRegion$ = this.countryListByRegion.asObservable();

  getContinent2() {
    return this.http
      .get<Country[]>('https://restcountries.com/v3.1/all')
      .pipe(tap((data) => this.countryList.next(data)));
  }

  countriesByContintent(country: Regions) {
    switch (country) {
      case Regions.AFRICA:
        const afrikaCountries: Country[] = this.countryList.value.filter(
          (country) => country.region === Regions.AFRICA
        );
        this.countryListByRegion.next(afrikaCountries);
        break;
      case Regions.AMERICAS:
        const americasCountries: Country[] = this.countryList.value.filter(
          (country) => country.region === Regions.AMERICAS
        );
        this.countryListByRegion.next(americasCountries);
        break;
      case Regions.EUROPE:
        const europeCountiures: Country[] = this.countryList.value.filter(
          (country) => country.region === Regions.EUROPE
        );
        this.countryListByRegion.next(europeCountiures);
        break;
      case Regions.OCEANIA:
        const oceaniaCountiures: Country[] = this.countryList.value.filter(
          (country) => country.region === Regions.OCEANIA
        );
        this.countryListByRegion.next(oceaniaCountiures);
        break;
      case Regions.ASIA:
        const asiaCountiures: Country[] = this.countryList.value.filter(
          (country) => country.region === Regions.ASIA
        );
        this.countryListByRegion.next(asiaCountiures);
    }
  }

  selectCountry(country: Country) {
    const selectedCountryComp: Country = this.countryListByRegion.value.find(
      (data) => data.name === country.name
    );

    this.selectedCountry.next({
      ...selectedCountryComp,
      currencies: Object.values(selectedCountryComp.currencies),
      currenciesShortcut: Object.keys(selectedCountryComp.currencies),
    });
    this.router.navigate(['single-country']);
  }
}
