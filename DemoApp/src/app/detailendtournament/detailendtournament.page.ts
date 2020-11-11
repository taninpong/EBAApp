import { Component, OnInit } from '@angular/core';
import { teamInfo } from 'src/models/Profile';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-detailendtournament',
  templateUrl: './detailendtournament.page.html',
  styleUrls: ['./detailendtournament.page.scss'],
})
export class DetailendtournamentPage implements OnInit {

  teamDetail: teamInfo[];
  constructor(public service: PlayerService) {
    this.teamDetail = this.service.teamInfo;
  }

  ngOnInit() {
  }

}
