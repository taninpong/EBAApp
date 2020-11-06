import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditprofileNAMEPageRoutingModule } from './editprofile-name-routing.module';

import { EditprofileNAMEPage } from './editprofile-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditprofileNAMEPageRoutingModule
  ],
  declarations: [EditprofileNAMEPage]
})
export class EditprofileNAMEPageModule {}
