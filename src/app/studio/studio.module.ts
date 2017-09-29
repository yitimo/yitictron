import { NgModule } from '@angular/core';
import { SharedModule } from '../-shared';
import { StudioService } from './studio.service';
import { StudioComponent } from './studio.component';
import { StudioRoutingModule } from './studio.route';
import { EditComponent, KeySkipPipe } from './edit';
import { ListComponent } from './list';

@NgModule({
    declarations: [
        StudioComponent,
        EditComponent,
        ListComponent, KeySkipPipe
    ],
    imports: [ SharedModule, StudioRoutingModule ],
    exports: [],
    providers: [
        StudioService
    ],
})
export class StudioModule {}
