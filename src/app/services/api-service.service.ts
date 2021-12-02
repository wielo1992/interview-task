import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../models/country-model';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private readonly http: HttpClient) {}

  private readonly countryList = new BehaviorSubject<Country[]>([]);
  readonly contryList$ = this.countryList.asObservable();

  getContinents(region: string) {
    return this.http
      .get<Country[]>(`https://restcountries.com/v3.1/region/${region}`)
      .pipe(tap((res) => this.countryList.next(res)));
  }

  gettingCurrencyShortcut() {
    const currency = this.countryList.value.map((country) => country.currency);
    Object.keys(currency);
  }
}
