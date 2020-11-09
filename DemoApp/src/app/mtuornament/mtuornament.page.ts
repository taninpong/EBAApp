import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/Player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-mtuornament',
  templateUrl: './mtuornament.page.html',
  styleUrls: ['./mtuornament.page.scss'],
})
export class MTuornamentPage implements OnInit {

  public player_A: Player;
  public player_B: Player = new Player;
  public page: string;
  constructor(private service: PlayerService) {
    this.player_A = this.service.Player_A;
    this.page = "/create-new-team";
    this.checkStatus();
  }

  ngOnInit() {
  }

  switchPlayer() {
    console.log("A");

  }

  checkStatus() {
    if (this.player_A.teamName == "") {
      this.page = "/add-team";
    }
  }
}
