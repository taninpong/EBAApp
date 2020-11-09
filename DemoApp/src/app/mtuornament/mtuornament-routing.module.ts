import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MTuornamentPage } from './mtuornament.page';

const routes: Routes = [
  {
    path: '',
    component: MTuornamentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MTuornamentPageRoutingModule {}
