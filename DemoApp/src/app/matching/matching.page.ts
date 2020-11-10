import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-matching",
  templateUrl: "./matching.page.html",
  styleUrls: ["./matching.page.scss"],
})
export class MatchingPage implements OnInit {
  currectTeam = {
    teamName: "Rama ETA",
    rating: 9999,
  };

  lsitTeam = [
    {
      teamName: "Team A",
      rating: 5654,
      result: "Win",
      score: "3-0",
      imgTeam: "",
    },
    {
      teamName: "Team B",
      rating: 12562,
      result: "Win",
      score: "2-1",
      imgTeam: "",
    },
    {
      teamName: "Team H",
      rating: 7845,
      result: "Lost",
      score: "0-3",
      imgTeam: "",
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  openDetailsWithState(isCaptan: boolean) {
    let navigationExtras: NavigationExtras = {
      state: {
        isCaptan: isCaptan,
      },
    };
    this.router.navigate(["match-result"], navigationExtras);
    console.log(`isCaptan : ${isCaptan}`);
    console.log(isCaptan);
  }
}
