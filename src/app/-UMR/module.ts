import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SylphynService } from './sylphyn';
import { UmaruService } from './umaru';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [SylphynService, UmaruService],
})
export class UMRModule {
    // this is UMR module for play audio and even vedio !
}
