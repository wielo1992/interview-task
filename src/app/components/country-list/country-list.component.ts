import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Country } from 'src/app/models/country-model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent {
  constructor(private readonly api: ApiServiceService) {}

  public readonly dataSource = this.api.countryListByRegion$;
  public readonly displayedColumns = ['Flag'];
  public readonly chosedContinent = this.api.choosedContinent;

  showDetails(country: Country) {
    this.api.selectCountry(country);
  }
}
