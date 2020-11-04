import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GameCreate, GameInfo, GameSupportReward } from 'src/models/GameModel';
import { ConnectSVService } from '../connect-sv.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  createGameData: GameCreate = new GameCreate;
  supportReward: GameSupportReward = new GameSupportReward;
  gamesData: GameInfo[];
  gameData: GameInfo = new GameInfo;
  constructor(private service: ConnectSVService, public alertController: AlertController) { }

  ngOnInit() {
  }

  getGames() {
    this.service.getGames().subscribe(data => {
      this.gamesData = data;
    });
  }

  getGameById(id: string) {
    this.service.getGameById(id).subscribe(data => {
      this.gameData = data;
    });
  }

  deleteGame(id: string) {
    this.service.deleteGame(id).subscribe(data => {
      this.presentAlert("Delete Success");
    });
  }

  createGame(name: string, banner: string, description: string) {
    this.createGameData.name = name;
    this.createGameData.bannerUrl = banner;
    this.createGameData.description = description;
    this.service.createGame(this.createGameData).subscribe(data => {
      this.presentAlert("Create Success");
    });
  }

  supportRewardPlan(gameId: string, rewardPlanId: string) {
    this.supportReward.gameId = gameId;
    this.supportReward.rewardPlanId = rewardPlanId;
    this.service.supportRewardPlan(this.supportReward).subscribe(data => {
      this.presentAlert("supportRewardPlan Success");
    });
  }
  async presentAlert(text: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: text,
      buttons: ['OK']
    });
    await alert.present();
  }
}
