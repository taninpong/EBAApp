import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DlgPlayerInfoPage } from './dlg-player-info.page';

const routes: Routes = [
  {
    path: '',
    component: DlgPlayerInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DlgPlayerInfoPageRoutingModule {}
