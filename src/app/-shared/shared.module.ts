import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserBarComponent } from './user-bar.component';
import { MaterialModule } from '../-material/material.module';
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
    imports: [ CommonModule, RouterModule, MaterialModule ],
    exports: [
        CommonModule, MaterialModule, YTBPullDirective,
        UserBarComponent, StatusCardComponent, SideMenuComponent
    ],
    providers: [],
})
export class SharedModule {}
