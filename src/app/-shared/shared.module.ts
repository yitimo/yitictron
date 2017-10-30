import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Material相关
import {
    MatSidenavModule, MatButtonModule, MatMenuModule,
    MatToolbarModule, MatDialogModule, MatGridListModule,
    MatIconModule, MatProgressBarModule, MatTooltipModule,
    MatInputModule, MatPaginatorModule, MatRadioModule
} from '@angular/material';

import { UserBarComponent } from './user-bar.component';
import { DialogPopupComponent } from './popup/dialog.component';
import { YTBPullDirective } from './ytb-pull/ytb-pull.component';

@NgModule({
    declarations: [
        UserBarComponent, DialogPopupComponent, YTBPullDirective
    ],
    imports: [
        MatSidenavModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatDialogModule,
        MatGridListModule, MatIconModule, MatProgressBarModule, MatTooltipModule, MatInputModule,
        MatPaginatorModule, MatRadioModule,

        CommonModule
    ],
    exports: [
        MatSidenavModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatDialogModule,
        MatGridListModule, MatIconModule, MatProgressBarModule, MatTooltipModule, MatInputModule,
        MatPaginatorModule, MatRadioModule,

        CommonModule, YTBPullDirective,
        FormsModule, UserBarComponent
    ],
    providers: [],
    entryComponents: [DialogPopupComponent]
})
export class SharedModule {}
