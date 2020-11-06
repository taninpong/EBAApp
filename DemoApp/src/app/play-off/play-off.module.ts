import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayOffPageRoutingModule } from './play-off-routing.module';

import { PlayOffPage } from './play-off.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayOffPageRoutingModule
  ],
  declarations: [PlayOffPage]
})
export class PlayOffPageModule {}
