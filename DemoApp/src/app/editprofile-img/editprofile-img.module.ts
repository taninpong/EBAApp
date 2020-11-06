import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditprofileIMGPageRoutingModule } from './editprofile-img-routing.module';

import { EditprofileIMGPage } from './editprofile-img.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditprofileIMGPageRoutingModule
  ],
  declarations: [EditprofileIMGPage]
})
export class EditprofileIMGPageModule {}
