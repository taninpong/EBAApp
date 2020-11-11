import { Component, OnInit } from '@angular/core';
import { profile } from 'src/models/Profile';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(private Data: PlayerService) {
    console.log(Data.Profile);
  }

  ngOnInit() {
  }

}
