import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrandInfo } from 'src/models/BrandModel';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.page.html',
  styleUrls: ['./brand.page.scss'],
})
export class BrandPage implements OnInit {
  brandinfo: BrandInfo = { name: "", bannerUrl: "", playerId: "" };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getAPIAllData() {
    var data = this.http.get("http://localhost:32778/Brand");
    data.subscribe(data => console.log(data)
    );
  }

  postapi(name: string, ban: string, player: string) {
    console.log(this.brandinfo);

    console.log(name, ban, player);
    this.brandinfo.name = name;
    this.brandinfo.bannerUrl = ban;
    this.brandinfo.playerId = player;
    console.log(this.brandinfo);
    this.http.post<BrandInfo>('http://localhost:32778/Brand', this.brandinfo).subscribe(data => {
      console.log(data);
    })
  }
  getAPIById(id: string) {
    var data = this.http.get("http://localhost:32778/Brand/" + id);
    data.subscribe(data => console.log(data)
    );
  }

  DeleteData(id: string) {
    var data = this.http.delete("http://localhost:32778/Brand/" + id);
    data.subscribe(data => console.log("Delete Success")
    );
  }
}
