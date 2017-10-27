import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Material相关
import {
    MatSidenavModule, MatButtonModule, MatMenuModule,
    MatToolbarModule, MatDialogModule, MatGridListModule,
    MatIconModule, MatProgressBarModule, MatTooltipModule,
    MatInputModule, MatPaginatorModule, MatRadioModule
} from '@angular/material';

import { UserBarComponent } from './user-bar.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { StatusImgComponent } from './status-card/simg/status-img.component';
import { StatusTextComponent } from './status-card/text/status-text.component';
import { StatusRetweetedComponent } from './status-card/retweeted/status-retweeted.component';
import { StatusUserComponent } from './status-card/user/status-user.component';
import { SSexPipe } from './status-card/user/ssex.pipe';
import { DialogPopupComponent } from './popup/dialog.component';
import { YTBPullDirective } from './ytb-pull/ytb-pull.component';
import { SideMenuComponent } from './ytc-sidemenu/ytc-sidemenu.component';

@NgModule({
    declarations: [
        UserBarComponent, StatusCardComponent, StatusImgComponent,
        StatusTextComponent, StatusRetweetedComponent, StatusUserComponent,
        SSexPipe, DialogPopupComponent, YTBPullDirective, SideMenuComponent
    ],
    imports: [
        MatSidenavModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatDialogModule,
        MatGridListModule, MatIconModule, MatProgressBarModule, MatTooltipModule, MatInputModule,
        MatPaginatorModule, MatRadioModule,

        CommonModule
    ],
    exports: [
        MatSidenavModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatDialogModule,
        MatGridListModule, MatIconModule, MatProgressBarModule, MatTooltipModule, MatInputModule,
        MatPaginatorModule, MatRadioModule,

        CommonModule, YTBPullDirective, UserBarComponent,
        StatusCardComponent, SideMenuComponent, FormsModule
    ],
    providers: [],
})
export class SharedModule {}
