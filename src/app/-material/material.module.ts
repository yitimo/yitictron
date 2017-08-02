import { NgModule } from '@angular/core';
import {
  MdSidenavModule, MdButtonModule, MdMenuModule,
  MdToolbarModule, MdDialogModule, MdGridListModule,
  MdIconModule, MdProgressBarModule, MdTooltipModule,
  MdInputModule, MdPaginatorModule
} from '@angular/material';

@NgModule({
  exports: [
    MdSidenavModule, MdButtonModule, MdMenuModule, MdToolbarModule, MdDialogModule,
    MdGridListModule, MdIconModule, MdProgressBarModule, MdTooltipModule, MdInputModule,
    MdPaginatorModule
  ]
})
export class MaterialModule {}
