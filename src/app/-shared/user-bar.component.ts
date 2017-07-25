import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DialogPopupComponent } from './popup/dialog.component';

@Component({
    selector: 'ytb-userbar',
    template: `
        <button md-button [mdMenuTriggerFor]="menu" *ngIf="user">
            <img class="ytb-head" src="/assets/img/yitimo.jpn" />
            Yitimo
        </button>
        <md-menu #menu="mdMenu" xPosition="before" yPosition="below">
            <button md-menu-item>个人中心</button>
            <button md-menu-item>登录检查</button>
            <button md-menu-item>注销</button>
        </md-menu>
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
        public dialog: MdDialog
    ) {}
}
