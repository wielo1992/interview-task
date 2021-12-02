import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country-model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleCountryComponent implements OnInit {
  constructor(private readonly api: ApiServiceService) {}

  selectedCountry: Country;

  ngOnInit(): void {
    this.api.selectedCountry$.subscribe(
      (data) => (this.selectedCountry = data)
    );
  }
}
