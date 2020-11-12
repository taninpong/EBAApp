import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Player } from 'src/models/Player';
import { Team } from 'src/models/Team';

@Component({
  selector: 'app-dlg-player-detail',
  templateUrl: './dlg-player-detail.page.html',
  styleUrls: ['./dlg-player-detail.page.scss'],
})
export class DlgPlayerDetailPage implements OnInit {
  teamData: Team;
  constructor(private navParams: NavParams, private dlg: ModalController) {
    this.teamData = this.navParams.get('playerData');
    console.log(this.teamData);
  }

  ngOnInit() {
  }
  dismissModal() {
    this.dlg.dismiss({
      'dismissed': true
    });
  }

}
