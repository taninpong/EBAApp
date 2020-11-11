import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-team-modal",
  templateUrl: "./team-modal.page.html",
  styleUrls: ["./team-modal.page.scss"],
})
export class TeamModalPage implements OnInit {
  constructor(
    public modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {}
  async dismissModal() {
    await this.modalController.dismiss();
  }
  async teamProfile() {
    await this.modalController.dismiss();
    let navigationExtras: NavigationExtras = {
      state: {
      },
    };
    this.router.navigate(["team-detail"], navigationExtras);
  }
}
