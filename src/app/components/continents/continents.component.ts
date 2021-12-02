import { Component, OnInit } from '@angular/core';
import { Regions } from 'src/app/models/country-model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.scss'],
})
export class ContinentsComponent implements OnInit {
  constructor(private readonly api: ApiServiceService) {}

  readonly Regions = Regions;

  getContinent(region: string) {
    this.api.getContinents(region).subscribe((data) => console.log(data));
  }

  ngOnInit(): void {}
}
