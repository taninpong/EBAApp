import { Component, OnInit } from '@angular/core';
import { teamInfo } from 'src/models/Profile';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-resultendtournament',
  templateUrl: './resultendtournament.page.html',
  styleUrls: ['./resultendtournament.page.scss'],
})
export class ResultendtournamentPage implements OnInit {


  // teamSort: teamInfo[] = this.service.teamInfo;
  constructor(public service: PlayerService) {
    this.service.teamInfo.sort((a, b) => b.rating - a.rating);
    // this.teamSort = this.teamSort.splice(12,0);
    // console.log(this.teamSort);
  }

  ngOnInit() {
  }

}
