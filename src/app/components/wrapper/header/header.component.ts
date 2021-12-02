import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor(
    private location: Location,
    private api: ApiServiceService,
    private readonly dialog: MatDialog
  ) {}

  goBack() {
    this.location.back();
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);
    dialogRef;
  }

  ngOnInit(): void {
    this.api.getContinent().subscribe();
  }
}
