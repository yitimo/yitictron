/**
 * AppModule 根模块
 * 负责：
 *      1. 平台引导模块引入
 *      2. 核心模块引入
 *      3. 根路由模块引入
 *      4. 运行环境声明
 *      5. 根组件申明
 */

import { ENV_PROVIDERS } from './environment';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.route';
import { AppComponent } from './app.component';
import { HomeIndexComponent } from './home/index/home-index.component';

import '../styles/global.css';
// tslint:disable-next-line:no-var-requires
const FastClick = require('fastclick');
FastClick.attach(document.body);

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, HomeIndexComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [ENV_PROVIDERS]
})
export class AppModule { }
