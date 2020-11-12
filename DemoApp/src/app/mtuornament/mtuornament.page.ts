import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Player } from 'src/models/Player';
import { Team } from 'src/models/Team';
import { DlgPlayerInfoPage } from '../dlg-player-info/dlg-player-info.page';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-mtuornament',
  templateUrl: './mtuornament.page.html',
  styleUrls: ['./mtuornament.page.scss'],
})
export class MTuornamentPage implements OnInit {

  public player: Player;
  public page: string;
  public swithcAcc: boolean;
  constructor(private service: PlayerService, private dlg: ModalController) {
    this.player = this.service.player;
    console.log(this.player);
  }

  ngOnInit() {
    this.page = this.checkStatus();
    console.log(this.page);
  }

  // switchPlayer() {
  //   this.swithcAcc = !this.swithcAcc;
  //   console.log(this.swithcAcc);
  //   if (this.swithcAcc) {
  //     this.player = this.service.Player_B;
  //   } else {
  //     this.player = this.service.Player_A;
  //   }
  //   console.log(this.player);

  // }

  async presentModal(checkLeadder: Player) {
    console.log(checkLeadder);
    const modal = await this.dlg.create({
      component: DlgPlayerInfoPage,
      cssClass: 'my-custom-class',
      componentProps: { checkLeadder },

    });
    return await modal.present();
  }

  checkStatus() {
    if (this.player.teamName == "") {
      return "/add-team";
    } else if (this.player.inGameNamr == "" || this.player.role == "" || this.player.email == "" || this.player.tel == "") {
      return "/add-info";
    } else {
      return "/create-new-team";
    }
  }
  
}
