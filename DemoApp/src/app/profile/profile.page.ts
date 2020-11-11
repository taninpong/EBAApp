import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/models/Player';
import { profile } from 'src/models/Profile';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  playerData: Player;
  constructor(private Data: PlayerService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(res, "asdasdasdasd");
      if (res = {}) {

      } else {

      }
    });
  }
}
