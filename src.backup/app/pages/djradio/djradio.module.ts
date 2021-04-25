import { NgModule } from '@angular/core';

import { DjradioRoutingModule } from './djradio.route';
import { DjradioComponent } from './djradio.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [DjradioRoutingModule],
    exports: [],
    declarations: [DjradioComponent, HomeComponent],
    providers: [],
})
export class DjradioModule { }

