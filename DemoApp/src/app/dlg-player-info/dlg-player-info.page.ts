import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dlg-player-info',
  templateUrl: './dlg-player-info.page.html',
  styleUrls: ['./dlg-player-info.page.scss'],
})
export class DlgPlayerInfoPage implements OnInit {

  constructor(private dlg: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.dlg.dismiss({
      'dismissed': true
    });
  }
}
