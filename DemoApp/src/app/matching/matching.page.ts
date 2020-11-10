import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { TeamModalPage } from "../team-modal/team-modal.page";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-matching",
  templateUrl: "./matching.page.html",
  styleUrls: ["./matching.page.scss"],
})
export class MatchingPage implements OnInit {
  currectTeam = {
    teamName: "Rama ETA",
    rating: 9999,
    seeding: 25
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

  constructor(private router: Router,public modalController: ModalController) {}

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
  async detailTeam(){
    console.log("Click Avatar");
    const modal = await this.modalController.create({
      component: TeamModalPage,
      componentProps: {
        teamName: this.currectTeam.teamName,
        rating: this.currectTeam.rating,
        seeding: this.currectTeam.seeding
      }
    });
    return await modal.present();
  }
}
