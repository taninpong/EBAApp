import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/Player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-create-new-team',
  templateUrl: './create-new-team.page.html',
  styleUrls: ['./create-new-team.page.scss'],
})
export class CreateNewTeamPage implements OnInit {


  public player: Player;

  constructor(private service: PlayerService) {
    this.player = this.service.Player_A;
  }

  ngOnInit() {
  }

  confirm(){
    this.player.leadder = true;
    this.player.tuornament = true;
    this.service.Player_A = this.player;
    console.log(this.service.Player_A);
    
  }


}
