import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-create-new-team',
  templateUrl: './create-new-team.page.html',
  styleUrls: ['./create-new-team.page.scss'],
})
export class CreateNewTeamPage implements OnInit {


  public teamName: string;

  constructor(private service: PlayerService) {
    this.teamName ="OhNoooooo??";
    console.log(this.teamName);
    
  }

  ngOnInit() {
  }



}
