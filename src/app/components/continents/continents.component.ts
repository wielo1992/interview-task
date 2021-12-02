import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Regions } from 'src/app/models/country-model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.scss'],
})
export class ContinentsComponent implements OnInit {
  constructor(
    private readonly api: ApiServiceService,
    private router: Router
  ) {}

  readonly Regions = Regions;

  getContinent(country: Regions) {
    this.api.countriesByContintent(country);
    this.router.navigate(['country-list']);
    console.log(country);
  }

  ngOnInit(): void {}
}
