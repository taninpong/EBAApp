import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultendtournamentPage } from './resultendtournament.page';

const routes: Routes = [
  {
    path: '',
    component: ResultendtournamentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultendtournamentPageRoutingModule {}
