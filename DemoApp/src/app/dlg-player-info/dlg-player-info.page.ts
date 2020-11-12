import { Component, OnInit, ɵPlayer } from '@angular/core';
import { AlertController, ModalController, NavController, NavParams } from '@ionic/angular';
import { Player } from 'src/models/Player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-dlg-player-info',
  templateUrl: './dlg-player-info.page.html',
  styleUrls: ['./dlg-player-info.page.scss'],
})
export class DlgPlayerInfoPage implements OnInit {

  playerData: Player;
  constructor(private dlg: ModalController, public navCtrl: NavController, private navParams: NavParams, public alertController: AlertController, private service: PlayerService) {
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
  PasBand() {
    this.presentAlertConfirm();
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'แจ้งเตือน!!!',
      message: 'จะยุบทีมหรอ ?',
      buttons: [
        {
          text: 'Yes',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.presentAlert();
            this.dismissModal();
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'No',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'ลบทีมสำเสร็จ',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.service.player.tuornament = false;
          console.log("asdasdds");
        }
      }]
    });

    await alert.present();
  }
}
