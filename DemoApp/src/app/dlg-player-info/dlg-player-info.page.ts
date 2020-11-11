import { Component, OnInit, ɵPlayer } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { Player } from 'src/models/Player';

@Component({
  selector: 'app-dlg-player-info',
  templateUrl: './dlg-player-info.page.html',
  styleUrls: ['./dlg-player-info.page.scss'],
})
export class DlgPlayerInfoPage implements OnInit {

  playerData: Player;
  constructor(private dlg: ModalController, public navCtrl: NavController, private navParams: NavParams) {
    this.playerData = this.navParams.get('checkLeadder');
    console.log(this.playerData);

  }

  ngOnInit() {
  }
  dismissModal() {
    this.dlg.dismiss({
      'dismissed': true
    });
  }
  dismissModal2() {
    this.dlg.dismiss({
      'dismissed': true,

    });
    this.navCtrl.navigateForward("/profile", { queryParams: this.playerData });
  }
}
