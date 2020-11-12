import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.page.html',
  styleUrls: ['./tournament.page.scss'],
})
export class TournamentPage implements OnInit {

  constructor(private service: PlayerService) { }

  ngOnInit() {
  }

  switchPlayer() {
    this.service.switchPlayer();

  }
}
