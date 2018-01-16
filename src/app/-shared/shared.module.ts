import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconDirective } from './directives/icon.directive';

@NgModule({
    declarations: [IconDirective],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        IconDirective
    ],
    providers: [],
    entryComponents: []
})
export class SharedModule {}
