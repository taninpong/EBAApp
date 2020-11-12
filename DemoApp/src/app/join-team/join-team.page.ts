import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/models/Player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-join-team',
  templateUrl: './join-team.page.html',
  styleUrls: ['./join-team.page.scss'],
})
export class JoinTeamPage implements OnInit {

  public player: Player;
  public check: string;
  constructor(private service: PlayerService, private rout: Router) {
    this.player = this.service.player;
    console.log(this.player);

  }

  ngOnInit() {
  }

  sendRequest() {
    if (this.player.inGameNamr == "" || this.player.role == "" || this.player.email == "" || this.player.tel == "") {
      this.rout.navigate(['/add-info']);
    } else {
      this.player.requestTeam = this.service.team.teamName;
      this.service.team.request.push(this.player);
      console.log(this.service.team);
    }
  }

  cancleRequest() {
    this.player.requestTeam = null;
    this.service.team.request = [];
    console.log(this.service.team);
  }

}
