import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MTuornamentPageRoutingModule } from './mtuornament-routing.module';

import { MTuornamentPage } from './mtuornament.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MTuornamentPageRoutingModule
  ],
  declarations: [MTuornamentPage]
})
export class MTuornamentPageModule {}
