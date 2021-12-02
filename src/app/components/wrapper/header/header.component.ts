import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private location: Location, private api: ApiServiceService) {}

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.api.getContinent2().subscribe((data) => console.log(data));
  }
}
