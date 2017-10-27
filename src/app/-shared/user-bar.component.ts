import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogPopupComponent } from './popup/dialog.component';

@Component({
    selector: 'ytb-userbar',
    template: `
        <button mat-button [matMenuTriggerFor]="menu" *ngIf="user">
            <img class="ytb-head" src="/assets/img/yitimo.jpn" />
            Yitimo
        </button>
        <mat-menu #menu="matMenu" xPosition="before" yPosition="below">
            <button mat-menu-item>个人中心</button>
            <button mat-menu-item>登录检查</button>
            <button mat-menu-item>注销</button>
        </mat-menu>
    `,
    styles: [`
        .ytb-head{
            height: 36px;width: 36px;border-radius: 100%;
        }
    `]
})
export class UserBarComponent {
    public user;
    constructor(
        public dialog: MatDialog
    ) {}
}
