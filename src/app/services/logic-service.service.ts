import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Country } from '../models/country-model';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root',
})
export class LogicServiceService {
  constructor(private readonly api: ApiServiceService) {}

  private readonly country = new BehaviorSubject<Country>(null);
  readonly country$ = this.country.asObservable();

  showSingleCountry(country: Country) {
    this.country.next(country);
  }
}
