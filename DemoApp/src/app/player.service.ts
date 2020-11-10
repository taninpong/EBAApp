import { Injectable } from '@angular/core';
import { Player } from 'src/models/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public Player_A: Player = new Player;
  public Player_B: Player = new Player;
  constructor() {
    this.Player_A = {
      name: "Sorry",
      email: "",
      inGameNamr: "",
      role: "",
      teamLogo: "",
      teamName: "",
      tel: "",
      tuornament: false,
      leadder: false
    }
  }
}
