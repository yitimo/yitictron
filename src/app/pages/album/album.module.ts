import { NgModule } from '@angular/core';

import { AlbumRoutingModule } from './album.route';
import { AlbumComponent } from './album.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [AlbumRoutingModule],
    exports: [],
    declarations: [AlbumComponent, HomeComponent],
    providers: [],
})
export class AlbumModule { }

