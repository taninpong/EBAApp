import { Component, Host, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HostReq } from 'src/models/Host';
import { ConnectSVService } from '../connect-sv.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.page.html',
  styleUrls: ['./host.page.scss'],
})
export class HostPage implements OnInit {

  public hostReq: HostReq = new HostReq;
  public listHost: Host[];
  public ID: string;
  public host: Host;
  public DelID:string;
  constructor(private service: ConnectSVService, private alertctrl: AlertController) { }

  ngOnInit() {
  }

  async showAlert(msg: string) {
    let alert = await this.alertctrl.create({
      message: msg
    });
    await alert.present();
  }

  createHost() {
    this.service.createHost(this.hostReq).subscribe(data => {
      console.log(data);
      this.showAlert(JSON.stringify(data));
    },
      error => {
        this.showAlert(JSON.stringify(error));
      }
    );
  }

  getHost() {
    this.service.getHost().subscribe(data => {
      console.log(data);
      this.listHost = data;
    });
  }

  getHostByID() {
    this.service.getHostByID(this.ID).subscribe(data => {
      this.host = data;
      console.log(this.host);
    });
  }

  deleteHostByID() {
    this.service.deleteHostByID(this.DelID).subscribe(data => {
      console.log(data);
    });
  }
}
