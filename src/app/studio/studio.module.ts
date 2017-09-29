import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default';
import { StudioService } from './studio.service';
import { StudioComponent } from './studio.component';
import { StudioRoutingModule } from './studio.route';
import { EditComponent } from './edit';
import { ListComponent } from './list';

@NgModule({
    declarations: [
        StudioComponent,
        EditComponent,
        ListComponent
    ],
    imports: [ CommonModule, StudioRoutingModule ],
    exports: [],
    providers: [
        StudioService
    ],
})
export class StudioModule {}
