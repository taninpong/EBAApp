import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Player } from 'src/models/Player';

@Component({
  selector: 'app-dlg-player-detail',
  templateUrl: './dlg-player-detail.page.html',
  styleUrls: ['./dlg-player-detail.page.scss'],
})
export class DlgPlayerDetailPage implements OnInit {
  playerData: Player;
  constructor(private navParams: NavParams, private dlg: ModalController) {
    this.playerData = this.navParams.get('playerData');
    console.log(this.playerData);
  }

  ngOnInit() {
  }
  dismissModal() {
    this.dlg.dismiss({
      'dismissed': true
    });
  }

}
