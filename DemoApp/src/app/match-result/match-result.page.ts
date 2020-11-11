import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-match-result",
  templateUrl: "./match-result.page.html",
  styleUrls: ["./match-result.page.scss"],
})
export class MatchResultPage implements OnInit {
  public data: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.isCaptan;
      }
    });
  }

  ngOnInit() {
    console.log(this.data);
  }
  openResultPreviewPage() {
    this.router.navigate(["result-preview"]);
  }
}
