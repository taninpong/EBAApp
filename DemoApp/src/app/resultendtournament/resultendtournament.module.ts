import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultendtournamentPageRoutingModule } from './resultendtournament-routing.module';

import { ResultendtournamentPage } from './resultendtournament.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultendtournamentPageRoutingModule
  ],
  declarations: [ResultendtournamentPage]
})
export class ResultendtournamentPageModule {}
