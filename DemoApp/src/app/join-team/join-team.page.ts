import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Player } from 'src/models/Player';
import { DlgPlayerDetailPage } from '../dlg-player-detail/dlg-player-detail.page';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-join-team',
  templateUrl: './join-team.page.html',
  styleUrls: ['./join-team.page.scss'],
})
export class JoinTeamPage implements OnInit {

  public player: Player;
  constructor(private service: PlayerService, private dlg: ModalController) {
    this.player = this.service.player;
    console.log(this.player);

  }

  ngOnInit() {
  }

  sendRequest() {
    this.player.requestTeam = this.service.team.teamName;
    this.service.team.request.push(this.player);
    console.log(this.service.team);
  }

  async presentModal(playerData: Player) {
    console.log(playerData);
    const modal = await this.dlg.create({
      component: DlgPlayerDetailPage,
      cssClass: 'my-custom-class',
      componentProps: { playerData },

    });
    return await modal.present();
  }
}
