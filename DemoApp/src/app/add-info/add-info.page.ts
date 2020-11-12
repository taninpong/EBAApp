import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/Player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.page.html',
  styleUrls: ['./add-info.page.scss'],
})
export class AddInfoPage implements OnInit {

  public player: Player;
  constructor(private service: PlayerService) { 
    this.player = this.service.player
  }

  ngOnInit() {
  }

  addInfo(){
    console.log(this.player);
    
  }
}
