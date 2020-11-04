import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Guild, GuildReq } from 'src/models/Guild';
import { ConnectSVService } from '../connect-sv.service';

@Component({
  selector: 'app-guild',
  templateUrl: './guild.page.html',
  styleUrls: ['./guild.page.scss'],
})
export class GuildPage implements OnInit {

  public guildReq: GuildReq = new GuildReq;
  public listGuild: Guild[];
  public ID: string;
  public guild: Guild;
  public DelID: string;
  constructor(private service: ConnectSVService, private alertctrl: AlertController) { }

  ngOnInit() {
  }

  async showAlert(msg: string) {
    let alert = await this.alertctrl.create({
      message: msg
    });
    await alert.present();
  }

  createGuild() {
    console.log(this.guildReq);
    
    this.service.createGuild(this.guildReq).subscribe(data => {
      console.log(data);
      this.showAlert(JSON.stringify(data));
    },
      error => {
        console.log(error);
        
        this.showAlert(JSON.stringify(error));
      }
    );
  }

  getGuild() {
    this.service.getGuild().subscribe(data => {
      console.log(data);
      this.listGuild = data;
    });
  }

  getGuildByID() {
    this.service.getGuildByID(this.ID).subscribe(data => {
      this.guild = data;
      console.log(this.guild);
    });
  }

  deleteGuildByID() {
    this.service.deleteGuildByID(this.DelID).subscribe(data => {
      console.log(data);
    });
  }
}
