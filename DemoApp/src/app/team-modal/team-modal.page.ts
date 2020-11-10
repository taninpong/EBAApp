import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-team-modal",
  templateUrl: "./team-modal.page.html",
  styleUrls: ["./team-modal.page.scss"],
})
export class TeamModalPage implements OnInit {
  teamName;
  rating;
  seeding;
  constructor(public modalController: ModalController) {}

  ngOnInit() {
  }
  async dismissModal() {
    await this.modalController.dismiss();
  }
  teamProfile(){
    
  }
}
