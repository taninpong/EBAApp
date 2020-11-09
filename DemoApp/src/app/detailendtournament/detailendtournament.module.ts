import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailendtournamentPageRoutingModule } from './detailendtournament-routing.module';

import { DetailendtournamentPage } from './detailendtournament.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailendtournamentPageRoutingModule
  ],
  declarations: [DetailendtournamentPage]
})
export class DetailendtournamentPageModule {}
