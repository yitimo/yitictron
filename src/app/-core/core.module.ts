import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfigService } from './services/apiconfig.service';
import { OAuthWeiboService } from './services/oauth.weibo.service';
import { Http } from './services/http';
import { WeiboGuard } from './guards/weibo.guard';
import { HttpClientModule } from '@angular/common/http';

import { PlayerService, Audio } from './services/player';

@NgModule({
    declarations: [],
    imports: [ CommonModule, FormsModule, HttpClientModule ],
    exports: [],
    providers: [ Http, OAuthWeiboService, ConfigService, WeiboGuard, PlayerService ],
})
export class CoreModule {}
