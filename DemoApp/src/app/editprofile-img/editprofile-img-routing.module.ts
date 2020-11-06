import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditprofileIMGPage } from './editprofile-img.page';

const routes: Routes = [
  {
    path: '',
    component: EditprofileIMGPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditprofileIMGPageRoutingModule {}
