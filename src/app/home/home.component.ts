import { Component, OnInit } from '@angular/core';
import { DialogPopupComponent, ytmFly } from '../-shared';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html',
  animations: [ytmFly]
})
export class HomeComponent {
  private http;
  constructor() {
    // this.http = require('http');
    // console.log(this.http);
    // let req = this.http.request({
    //     hostname: 'music.163.com',
    //     path: '/api/search/get/',
    //     method: 'POST',
    //     headers: {
    //       'Cookie': 'appver=2.0.2',
    //       'Referer': 'http://music.163.com',
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //       'Content-Length': `s=玫瑰色的你&limit=20&type=1&offset=0`.length
    //     }
    // }, (res) => {
    //   res.setEncoding('utf8');
    //   res.on('data', (chunk) => {
    //     console.log(chunk);
    //   });
    // });
    // req.write(`s=玫瑰色的你&limit=20&type=1&offset=0`);
    // req.end();
  }
}
