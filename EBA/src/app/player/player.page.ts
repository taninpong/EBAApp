import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { error } from 'protractor';
import { Player, PlayerReq } from 'src/models/Player';
import { ConnectSVService } from '../connect-sv.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {

  public playerReq: PlayerReq = new PlayerReq;
  public player: Player;
  public listPlayer: Player[];
  public ID: string;
  public DelID: string;
  constructor(private service: ConnectSVService, private alertctrl: AlertController) { }

  ngOnInit() {
  }

  async showAlert(msg: string) {
    let alert = await this.alertctrl.create({
      message: msg
    });
    await alert.present();
  }

  createPlayer() {
    this.service.createPlayer(this.playerReq).subscribe(data => {
      console.log(data);
      this.showAlert(data.referenceId);
    },
      error => {
        this.showAlert(JSON.stringify(error));
      }
    );
  }

  getPlayer() {
    this.service.getPlayer().subscribe(data => {
      console.log(data);
      this.listPlayer = data;
    });
  }

  getPlayerByID() {
    this.service.getPlayerByID(this.ID).subscribe(data => {
      this.player = data;
      console.log(this.player);
    });
  }

  deletePlayerByID() {
    this.service.deletePlayerByID(this.DelID).subscribe(data => {
      console.log(data);
    });
  }
}
