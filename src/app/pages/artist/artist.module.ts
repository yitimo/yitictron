import { NgModule } from '@angular/core';

import { ArtistRoutingModule } from './artist.route';
import { ArtistComponent } from './artist.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [ArtistRoutingModule],
    exports: [],
    declarations: [ArtistComponent, HomeComponent],
    providers: [],
})
export class ArtistModule { }

