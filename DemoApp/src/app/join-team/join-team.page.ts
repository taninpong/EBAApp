import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/Player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-join-team',
  templateUrl: './join-team.page.html',
  styleUrls: ['./join-team.page.scss'],
})
export class JoinTeamPage implements OnInit {

  public player: Player;
  constructor(private service: PlayerService) { 
    this.player = this.service.Player_B;
    console.log(this.player);
    
  }

  ngOnInit() {
  }

  sendRequest(){
    this.player.requestTeam = this.service.team.teamName;
  }

}
