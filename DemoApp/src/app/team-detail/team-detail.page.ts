import { Component, OnInit } from "@angular/core";
import { Team } from '../../models/Team';
import { Player } from '../../models/Player';
import { TeamServiceService  } from "../services/team-service.service";

@Component({
  selector: "app-team-detail",
  templateUrl: "./team-detail.page.html",
  styleUrls: ["./team-detail.page.scss"],
})
export class TeamDetailPage implements OnInit {

  public currectTeam : Team = new Team();
  public players: Player[];

  constructor(private service: TeamServiceService) {
    this.currectTeam = service.currectTeam;
    this.players = service.currectTeam.player;
  }

  ngOnInit() {
    console.log(this.currectTeam);
  }
  onClick(){

  }
}
