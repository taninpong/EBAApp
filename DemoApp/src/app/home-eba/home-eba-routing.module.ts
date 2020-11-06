import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeEBAPage } from './home-eba.page';

const routes: Routes = [
  {
    path: '',
    component: HomeEBAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeEBAPageRoutingModule {}
