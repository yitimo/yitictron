import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeiboRoutingModule } from './weibo.route';
import { WeiboComponent } from './weibo.component';

import { StatusCardComponent } from './status-card/status-card.component';
import { StatusImgComponent } from './status-card/simg/status-img.component';
import { StatusTextComponent } from './status-card/text/status-text.component';
import { StatusRetweetedComponent } from './status-card/retweeted/status-retweeted.component';
import { StatusUserComponent } from './status-card/user/status-user.component';
import { SSexPipe } from './status-card/user/ssex.pipe';

@NgModule({
    declarations: [
        WeiboComponent, StatusCardComponent, StatusImgComponent,
        StatusTextComponent, StatusRetweetedComponent, StatusUserComponent,
        SSexPipe
    ],
    imports: [ CommonModule, WeiboRoutingModule ],
    exports: [],
    providers: [],
})
export class WeiboModule {}
