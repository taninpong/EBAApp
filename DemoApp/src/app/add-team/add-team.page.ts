import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/Player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.page.html',
  styleUrls: ['./add-team.page.scss'],
})
export class AddTeamPage implements OnInit {

  public player_A: Player;
  public page: string;
  constructor(private service: PlayerService) { 
    this.player_A = this.service.Player_A;
    console.log(this.player_A);
    if (this.player_A.inGameNamr == "" || this.player_A.role == "" || this.player_A.email == "" || this.player_A.tel == "") {
      this.page = "/add-info";
    }
    
  }

  ngOnInit() {
  }

  photo(){
    this.player_A.teamLogo = "../../assets/teamLogo.png";
  }

  OK(){
    this.service.Player_A = this.player_A;
  }
}
