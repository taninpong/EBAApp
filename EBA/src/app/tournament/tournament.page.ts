import { Component, OnInit } from '@angular/core';
import { Tournament } from 'src/models/Tournament';
import { ConnectSVService } from '../connect-sv.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.page.html',
  styleUrls: ['./tournament.page.scss'],
})
export class TournamentPage implements OnInit {

  public Tournament: Tournament = new Tournament;
  public TournamentID: Tournament = new Tournament;
  public ListTournament: Tournament[];
  public ID: string;
  constructor(private service: ConnectSVService) { }

  ngOnInit() {
  }

  createTournament() {
    this.service.createTournament(this.Tournament).subscribe(data => {
      console.log(data);
    });
  }

  getTournament() {
    this.service.getTournament().subscribe(data => {
      this.ListTournament = data;
      console.log(this.ListTournament);
    });
  }

  getTournamentByID() {
    this.service.getTournamentByID(this.ID).subscribe(data => {
      this.TournamentID = data;
      console.log(this.TournamentID);
    });
  }

  deleteTournamentByID(){
    this.service.deleteTournamentByID(this.ID).subscribe(data =>{
      console.log(data);
    });
  }

}
