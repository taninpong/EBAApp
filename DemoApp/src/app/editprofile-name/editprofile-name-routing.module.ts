import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditprofileNAMEPage } from './editprofile-name.page';

const routes: Routes = [
  {
    path: '',
    component: EditprofileNAMEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditprofileNAMEPageRoutingModule {}
