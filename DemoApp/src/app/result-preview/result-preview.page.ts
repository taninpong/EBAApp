import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-result-preview",
  templateUrl: "./result-preview.page.html",
  styleUrls: ["./result-preview.page.scss"],
})
export class ResultPreviewPage implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}
  sendResult() {
    this.router.navigate(["home-eba"]);
  }
}
