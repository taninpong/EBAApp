import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.page.html',
  styleUrls: ['./search-team.page.scss'],
})
export class SearchTeamPage implements OnInit {

  public found: boolean;
  public teamID: string = "1234";
  public search: string;
  constructor(private rout: Router) {
    console.log(this.found);

  }

  ngOnInit() {
  }

  searchTeam() {
    console.log(this.search);
    if (this.search != this.teamID) {
      this.found = false;
    } else {
      this.rout.navigate(['/join-team']);
    }
  }
}
