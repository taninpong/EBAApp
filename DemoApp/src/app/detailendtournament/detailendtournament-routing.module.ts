import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailendtournamentPage } from './detailendtournament.page';

const routes: Routes = [
  {
    path: '',
    component: DetailendtournamentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailendtournamentPageRoutingModule {}
