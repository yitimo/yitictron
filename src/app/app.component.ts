/**
 * AppComponent 根组件
 * 负责：
 *    1. 配置<router-outlet>
 *    2. 配置全局组件
 */

import { Component } from '@angular/core';

@Component({
    selector: 'yitictron',
    template: `
    <router-outlet></router-outlet>
    `,
    providers: []
})
export class AppComponent {}
