import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { error } from 'protractor';
import { Tournament } from 'src/models/Tournament';
import { ConnectSVService } from '../connect-sv.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.page.html',
  styleUrls: ['./tournament.page.scss'],
})
export class TournamentPage implements OnInit {

  public Tournament: Tournament = new Tournament;
  public TournamentID: Tournament
  public ListTournament: Tournament[];
  public ID: string;
  public errorMsg: string;
  constructor(private service: ConnectSVService, private altctrl: AlertController) { }

  ngOnInit() {
  }

  async showAlert(msg: string) {
    let alert = await this.altctrl.create({
      message: msg
    });
    await alert.present();
  }

  createTournament() {
    this.service.createTournament(this.Tournament).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error)
        this.showAlert(JSON.stringify(error));
      }
    );
  }

  getTournament() {
    this.service.getTournament().subscribe(data => {
      this.ListTournament = data;
      console.log(this.ListTournament);
    },
    error => {
      console.log(error)
      this.showAlert(JSON.stringify(error));
    });
  }

  getTournamentByID() {
    this.service.getTournamentByID(this.ID).subscribe(data => {
      this.TournamentID = data;
      console.log(this.TournamentID);
    },
    error => {
      console.log(error)
      this.showAlert(JSON.stringify(error));
    });
  }

  deleteTournamentByID() {
    this.service.deleteTournamentByID(this.ID).subscribe(data => {
      console.log(data);
    },
    error => {
      console.log(error)
      this.showAlert(JSON.stringify(error));
    });
  }

}
