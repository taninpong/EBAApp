import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DlgPlayerDetailPage } from './dlg-player-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DlgPlayerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DlgPlayerDetailPageRoutingModule {}
