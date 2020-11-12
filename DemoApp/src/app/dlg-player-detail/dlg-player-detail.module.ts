import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlgPlayerDetailPageRoutingModule } from './dlg-player-detail-routing.module';

import { DlgPlayerDetailPage } from './dlg-player-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DlgPlayerDetailPageRoutingModule
  ],
  declarations: [DlgPlayerDetailPage]
})
export class DlgPlayerDetailPageModule {}
