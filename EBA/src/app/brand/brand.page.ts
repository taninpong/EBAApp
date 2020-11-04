import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BrandCreate, BrandInfo } from 'src/models/BrandModel';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.page.html',
  styleUrls: ['./brand.page.scss'],
})
export class BrandPage implements OnInit {
  brandinfo: BrandCreate = { name: "", bannerUrl: "", playerId: "" };
  brandDataList: BrandInfo[] = [];
  brandData: BrandInfo = null;
  // { _id: "", bannerUrl: "", name: "", createdByPlayerId: "", createdDate: "", suspendedDate: "" };

  constructor(private http: HttpClient, public alertController: AlertController) { }

  ngOnInit() {
  }

  getAPIAllData() {
    var data = this.http.get<BrandInfo[]>("http://localhost:32778/Brand").subscribe(
      datainfo => {
        console.log(datainfo)
        this.brandDataList = datainfo;
        console.log(this.brandDataList);
      });
  }

  postapi(name: string, ban: string, player: string) {
    console.log(this.brandinfo);

    console.log(name, ban, player);
    this.brandinfo.name = name;
    this.brandinfo.bannerUrl = ban;
    this.brandinfo.playerId = player;
    console.log(this.brandinfo);
    this.http.post<BrandCreate>('http://localhost:32778/Brand', this.brandinfo).subscribe(data => {
      console.log(data);
    })
  }
  getAPIById(id: string) {
    console.log(id);
    
    var data = this.http.get<BrandInfo>("http://localhost:32778/Brand/" + id);
    data.subscribe(data => {
      this.brandData = data
      console.log(data);
    });
  }

  DeleteData(id: string) {
    var data = this.http.delete("http://localhost:32778/Brand/" + id);
    data.subscribe(data => {
      console.log("Delete Success")
      this.presentAlert();
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Delete Success',
      buttons: ['OK']
    });
    await alert.present();
  }
}
