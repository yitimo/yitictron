// 全局脚本
import 'hammerjs';
// 全局样式相关
import '../styles/global.scss';
import '../styles/global.css';
import '../styles/icon.css';
// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ENV_PROVIDERS } from './environment';
// 根模块相关
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { SideBarComponent } from './+side-bar/side-bar.component';
import { AppRoutingModule } from './app.routes';
import { NotFoundRoutingModule } from './notfound';
import { CoreModule } from './-core';
import { SharedModule } from './-shared';

// 业务页面
import { QiniuModule } from './pages/qiniu';
import { N163Module } from './pages/163';
import { StudioModule } from './pages/studio';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    QiniuModule,
    N163Module,
    StudioModule,
    NotFoundRoutingModule
  ],
  providers: [
    ENV_PROVIDERS
  ],
  entryComponents: []
})
export class AppModule {}
