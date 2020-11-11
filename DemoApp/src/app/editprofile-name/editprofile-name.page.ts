import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-editprofile-name',
  templateUrl: './editprofile-name.page.html',
  styleUrls: ['./editprofile-name.page.scss'],
})
export class EditprofileNAMEPage implements OnInit {

  constructor(private Data: PlayerService) { }

  ngOnInit() {
  }

}
