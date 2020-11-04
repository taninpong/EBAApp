import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tournament } from 'src/models/Tournament';
import { Player, PlayerReq } from 'src/models/Player';


@Injectable({
  providedIn: 'root'
})
export class ConnectSVService {

  public url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:32768/"
  }

  //player
  createPlayer(item: PlayerReq) {
    return this.http.post<PlayerReq>(this.url + "Player", item);
  }

  getPlayer() {
    return this.http.get<Player[]>(this.url + "Player");
  }

  getPlayerByID(id: string) {
    return this.http.get<Player>(this.url + "Player/" + id);
  }

  deletePlayerByID(id: string){
    return this.http.delete<Player>(this.url + "Player/" + id);
  }

  //Tournament
  createTournament(item: Tournament) {
    return this.http.post<Tournament>(this.url + "Tournament", item);
  }

  getTournament() {
    return this.http.get<Tournament[]>(this.url + "Tournament");
  }

  getTournamentByID(id: string) {
    return this.http.get<Tournament>(this.url + "Tournament/" + id);
  }

  deleteTournamentByID(id: string) {
    return this.http.delete<Tournament>(this.url + "Tournament/" + id);
  }

  //Team

}
