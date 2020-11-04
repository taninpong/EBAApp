import { Component, OnInit } from '@angular/core';
import { GameInfo } from 'src/models/GameModel';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  gameInfo: GameInfo = { name: "", bannerUrl: "", description: "" };
  constructor() { }

  ngOnInit() {
  } 

}
