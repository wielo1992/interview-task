import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleCountryComponent {
  constructor(private readonly api: ApiServiceService) {}

  readonly selectedCountry$ = this.api.selectedCountry$;
}
