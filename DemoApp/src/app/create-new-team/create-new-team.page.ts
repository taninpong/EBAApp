import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/Player';
import { Team } from 'src/models/Team';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-create-new-team',
  templateUrl: './create-new-team.page.html',
  styleUrls: ['./create-new-team.page.scss'],
})
export class CreateNewTeamPage implements OnInit {

  public player: Player;
  public team:Team;
  constructor(private service: PlayerService) {
    this.player = this.service.player;
  }

  ngOnInit() {
  }

  confirm() {
    this.player.leadder = true;
    this.player.tuornament = true;
    this.service.player = this.player;
    console.log(this.service.player);
    this.team = {
      leadder: this.service.player,
      rating: 999,
      teamName:this.player.teamName,
      teamLogo:this.player.teamLogo,
      player:[],
      request:[]
    }
    this.service.team = this.team;

    console.log(this.service.team);
    
  }


}
