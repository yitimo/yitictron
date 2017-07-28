import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeiboRoutingModule } from './weibo.route';
import { WeiboComponent } from './weibo.component';

@NgModule({
    declarations: [WeiboComponent],
    imports: [ CommonModule, WeiboRoutingModule ],
    exports: [],
    providers: [],
})
export class WeiboModule {}
