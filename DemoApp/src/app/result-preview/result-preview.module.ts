import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultPreviewPageRoutingModule } from './result-preview-routing.module';

import { ResultPreviewPage } from './result-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultPreviewPageRoutingModule
  ],
  declarations: [ResultPreviewPage]
})
export class ResultPreviewPageModule {}
