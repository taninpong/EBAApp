import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlgPlayerInfoPageRoutingModule } from './dlg-player-info-routing.module';

import { DlgPlayerInfoPage } from './dlg-player-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DlgPlayerInfoPageRoutingModule
  ],
  declarations: [DlgPlayerInfoPage]
})
export class DlgPlayerInfoPageModule {}
