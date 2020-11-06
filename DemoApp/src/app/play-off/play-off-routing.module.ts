import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayOffPage } from './play-off.page';

const routes: Routes = [
  {
    path: '',
    component: PlayOffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayOffPageRoutingModule {}
