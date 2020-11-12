import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-editprofile-img',
  templateUrl: './editprofile-img.page.html',
  styleUrls: ['./editprofile-img.page.scss'],
})
export class EditprofileIMGPage implements OnInit {

  images: string[] = ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHUvOd8Q-VihyupbJCdgjIR2FxnjGtAgMu3g&usqp=CAU"
    , "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRX3MSTQlcB6sBGGjVPU1vUCMaDMrjbkyp2FA&usqp=CAU"
    , "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGqOhHRbNvkwKMeyF_tOrQKYFTHGUY0hOZDQ&usqp=CAU"
    , "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlpy44uj57yC-pwKgzL-FIOfWgAhmsvyKrsQ&usqp=CAU"
    , "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQD128GIzwKKLZ6BNC-MIKo5577nxG7d0t15Q&usqp=CAU"
    , "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHUvOd8Q-VihyupbJCdgjIR2FxnjGtAgMu3g&usqp=CAU"
    , "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRX3MSTQlcB6sBGGjVPU1vUCMaDMrjbkyp2FA&usqp=CAU"
    , "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGqOhHRbNvkwKMeyF_tOrQKYFTHGUY0hOZDQ&usqp=CAU"
    , "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlpy44uj57yC-pwKgzL-FIOfWgAhmsvyKrsQ&usqp=CAU"];
  constructor(private Data: PlayerService) {
  }

  ngOnInit() {
  }
  ChangeImg(img: string) {
    this.Data.Player_A.playerImg = img;
  }

}
