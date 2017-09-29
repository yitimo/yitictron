import { NgModule } from '@angular/core';
import {
  MdSidenavModule, MdButtonModule, MdMenuModule,
  MdToolbarModule, MdDialogModule, MdGridListModule,
  MdIconModule, MdProgressBarModule, MdTooltipModule,
  MdInputModule, MdPaginatorModule, MdRadioModule
} from '@angular/material';

@NgModule({
  exports: [
    MdSidenavModule, MdButtonModule, MdMenuModule, MdToolbarModule, MdDialogModule,
    MdGridListModule, MdIconModule, MdProgressBarModule, MdTooltipModule, MdInputModule,
    MdPaginatorModule, MdRadioModule
  ]
})
export class MaterialModule {}
