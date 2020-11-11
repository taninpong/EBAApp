import { Injectable } from '@angular/core';
import { Player } from 'src/models/Player';
import { Team } from 'src/models/Team';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public Player_A: Player = new Player;
  public Player_B: Player = new Player;
  public team: Team = new Team;
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
      leadder: false,
      rating: 1
    }
    this.Player_B = {
      name: "Pao Polo",
      email: "",
      inGameNamr: "",
      role: "",
      teamLogo: "",
      teamName: "",
      tel: "",
      tuornament: false,
      leadder: false,
      rating: 1
    }
    this.team = {
      leadder: null,
      player: [],
      rating: 1,
      teamLogo: "",
      teamName: "",
    }
  }
}
