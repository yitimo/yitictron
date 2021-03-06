import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HistoryService } from './services/history';
import { Interceptor } from './services/interceptor';
import { GlobalService } from './services/global';

@NgModule({
    declarations: [],
    imports: [ CommonModule, HttpClientModule ],
    exports: [],
    providers: [
        HistoryService,
        GlobalService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: Interceptor,
            multi: true
        }
    ],
})
export class CoreModule {}
