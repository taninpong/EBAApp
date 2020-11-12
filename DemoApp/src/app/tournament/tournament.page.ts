import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.page.html',
  styleUrls: ['./tournament.page.scss'],
})
export class TournamentPage implements OnInit {

  constructor(private service: PlayerService, private rout: Router) { }

  ngOnInit() {
  }

  switchPlayer() {
    this.service.switchPlayer();
  }

  navi() {
    if (this.service.player.requestTeam == null) {
      this.rout.navigate(['/mtuornament']);
    } else {
      this.rout.navigate(['/join-team']);
    }
  }
}
