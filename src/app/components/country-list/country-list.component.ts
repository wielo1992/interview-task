import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country-model';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LogicServiceService } from 'src/app/services/logic-service.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  constructor(
    private readonly api: ApiServiceService,
    private router: Router,
    private logic: LogicServiceService
  ) {}

  public readonly dataSource = this.api.countryListByRegion$;
  public readonly displayedColumns = ['Flag'];
  public readonly chosedContinent = this.api.choosedContinent;

  showDetails(country: Country) {
    this.api.selectCountry(country);
  }

  ngOnInit(): void {}
}
