import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BrandCreate, BrandInfo } from 'src/models/BrandModel';
import { ConnectSVService } from '../connect-sv.service';

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

  constructor(private http: HttpClient, public alertController: AlertController, private service: ConnectSVService) { }

  ngOnInit() {
  }

  getAPIAllData() {
    this.service.getBrandAll().subscribe(
      datainfo => {
        console.log(datainfo)
        this.brandDataList = datainfo;
        console.log(this.brandDataList);
      });
  }

  postapi(name: string, ban: string, player: string) {
    console.log(name, ban, player);
    this.brandinfo.name = name;
    this.brandinfo.bannerUrl = ban;
    this.brandinfo.playerId = player;
    console.log(this.brandinfo);
    this.service.createBrand(this.brandinfo).subscribe(data => {
      console.log(data);
    })
  }
  getAPIById(id: string) {
    console.log(id);
    this.service.getBrandById(id).subscribe(data => {
      this.brandData = data
      console.log(data);
    });
  }

  DeleteData(id: string) {
    this.service.deleteBrand(id).subscribe(data => {
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
