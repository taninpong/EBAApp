import { Injectable } from "@angular/core";
import { Player } from "src/models/Player";
import { Team } from "src/models/Team";
import { contact, profile, teamInfo } from "src/models/Profile";

@Injectable({
  providedIn: "root",
})
export class TeamServiceService {
  public currectTeam: Team = new Team();
  public Players: Player[];
  public mockPlayer: Player = new Player();

  public mockTeam: Team[];
  constructor() {
    this.mockPlayer = {
      name: "mockplayer",
      teamName: "mockTeam",
      teamLogo: "mockLogo",
      inGameNamr: "mockIGN",
      role: "mockRole",
      email: "mockEmail",
      tel: "mockTel",
      tuornament: true,
      rating: 9871,
      leadder: true,
    };

    this.Players = [
      {
        name: "HjDzrqLN3r",
        teamName: "",
        teamLogo: "",
        inGameNamr: "Thomasinarex",
        role: "Support",
        email: "",
        tel: "",
        tuornament: true,
        rating: 5689,
        leadder: true,
      },
      {
        name: "MB48r6zq2U",
        teamName: "",
        teamLogo: "",
        inGameNamr: "SmartTeethOMG",
        rating: 8636,
        role: "Offlane",
        email: "",
        tel: "",
        tuornament: true,
        leadder: false,
      },
      {
        name: "JiWzzwKUZH",
        teamName: "",
        teamLogo: "",
        inGameNamr: "DrSplendid",
        rating: 6344,
        role: "Carry",
        email: "",
        tel: "",
        tuornament: true,
        leadder: false,
      },
      {
        name: "y6pF62vdfL",
        teamName: "",
        teamLogo: "",
        inGameNamr: "FrogMilk",
        rating: 6768,
        role: "Support",
        email: "",
        tel: "",
        tuornament: true,
        leadder: false,
      },
      {
        name: "YIvXCR4jVM",
        teamName: "",
        teamLogo: "",
        inGameNamr: "Iamcreepy",
        rating: 5791,
        role: "Middle",
        email: "",
        tel: "",
        tuornament: true,
        leadder: false,
      },
    ];

    this.currectTeam = {
      teamName: "Rama ETA",
      teamLogo: "",
      rating: 9999,
      leadder: this.Players.find(it => it.leadder === true),
      player: this.Players,
    };
    this.mockTeam = [
      {
        teamName: "PandaSavage",
        teamLogo: "",
        rating: 8652,
        leadder: this.mockPlayer,
        player: [],
      },
      {
        teamName: "EsanRTA",
        teamLogo: "",
        rating: 9521,
        leadder: this.mockPlayer,
        player: [],
      },
      {
        teamName: "SEMonkey",
        teamLogo: "",
        rating: 9514,
        leadder: this.mockPlayer,
        player: [],
      },
    ];

  }
}
