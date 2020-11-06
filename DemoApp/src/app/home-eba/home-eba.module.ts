import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeEBAPageRoutingModule } from './home-eba-routing.module';

import { HomeEBAPage } from './home-eba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeEBAPageRoutingModule
  ],
  declarations: [HomeEBAPage]
})
export class HomeEBAPageModule {}
