import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { TeamModalPage } from "../team-modal/team-modal.page";
import { ModalController } from "@ionic/angular";
import { Player } from "src/models/Player";
import { Team } from "src/models/Team";
import { contact, profile, teamInfo } from "src/models/Profile";
import { TeamServiceService } from "../services/team-service.service";

@Component({
  selector: "app-matching",
  templateUrl: "./matching.page.html",
  styleUrls: ["./matching.page.scss"],
})
export class MatchingPage implements OnInit {

  private currectTeam : any;
  private lsitTeam: any;

  constructor(private router: Router,public modalController: ModalController,private service: TeamServiceService) {
    this.currectTeam = {
      teamName: service.currectTeam.teamName,
      rating: service.currectTeam.rating,
      seeding: 25
    };
  
    this.lsitTeam = [
      {
        teamName: service.mockTeam[0].teamName,
        rating: service.mockTeam[0].rating,
        result: "Win",
        score: "3-0",
        imgTeam: "",
        date: "12 May 2020 - 12:20"
      },
      {
        teamName: service.mockTeam[1].teamName,
        rating: service.mockTeam[1].rating,
        result: "Win",
        score: "2-1",
        imgTeam: "",
        date: "13 May 2020 - 12:20"
      },
      {
        teamName: service.mockTeam[2].teamName,
        rating: service.mockTeam[2].rating,
        result: "Lost",
        score: "0-3",
        imgTeam: "",
        date: "14 May 2020 - 12:20"
      },
    ];
  }

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
