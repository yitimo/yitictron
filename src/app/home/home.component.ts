import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { DialogPopupComponent, ytmFly } from '../-shared';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html',
  animations: [ytmFly]
})
export class HomeComponent {
  constructor() {
    //
  }
}
