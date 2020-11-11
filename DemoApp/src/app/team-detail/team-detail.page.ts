import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-team-detail",
  templateUrl: "./team-detail.page.html",
  styleUrls: ["./team-detail.page.scss"],
})
export class TeamDetailPage implements OnInit {
  currectTeam = {
    teamName: "Rama ETA",
    rating: 9999,
    seeding: 25
  };

  players = [
    {
      ebaUser: "HjDzrqLN3r",
      ign:"Thomasinarex",
      rating: 5689,
      role : "Support",
      isCptanTeam: true
    },
    {
      ebaUser: "MB48r6zq2U",
      ign:"SmartTeethOMG",
      rating: 8636,
      role : "Offlane",
      isCptanTeam: false
    },
    {
      ebaUser: "JiWzzwKUZH",
      ign:"DrSplendid",
      rating: 6344,
      role : "Carry",
      isCptanTeam: false
    },
    {
      ebaUser: "y6pF62vdfL",
      ign:"FrogMilk",
      rating: 6768,
      role : "Support",
      isCptanTeam: false
    },
    {
      ebaUser: "YIvXCR4jVM",
      ign:"Iamcreepy",
      rating: 5791,
      role : "Middle",
      isCptanTeam: false
    },
  ];
  constructor() {}

  ngOnInit() {
  }
  onClick(){

  }
}
