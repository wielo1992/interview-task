import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country-model';
import { LogicServiceService } from 'src/app/services/logic-service.service';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.scss'],
})
export class SingleCountryComponent implements OnInit {
  constructor(private readonly logic: LogicServiceService) {}

  country: Country;
  readonly country$ = this.logic.country$.subscribe(
    (data) => (this.country = data)
  );
  ngOnInit(): void {}
}
