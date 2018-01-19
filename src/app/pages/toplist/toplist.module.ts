import { NgModule } from '@angular/core';

import { ToplistRoutingModule } from './toplist.route';
import { ToplistComponent } from './toplist.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [ToplistRoutingModule],
    exports: [],
    declarations: [ToplistComponent, HomeComponent],
    providers: [],
})
export class ToplistModule { }

