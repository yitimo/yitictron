import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search.route';
import { SearchComponent } from './search.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [SearchRoutingModule],
    exports: [],
    declarations: [SearchComponent, HomeComponent],
    providers: [],
})
export class SearchModule { }

