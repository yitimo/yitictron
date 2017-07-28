import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ConfigService } from './services/apiconfig.service';
import { OAuthWeiboService } from './services/oauth.weibo.service';
import { YTCHttpService } from './services/ytc-http.service';
import { WeiboGuard } from './guards/weibo.guard';

@NgModule({
    declarations: [],
    imports: [ CommonModule, FormsModule, HttpModule ],
    exports: [],
    providers: [ YTCHttpService, OAuthWeiboService, ConfigService, WeiboGuard ],
})
export class CoreModule {}
