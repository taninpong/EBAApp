import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tournament } from 'src/models/Tournament';
import { GetTeamModel } from "../models/TeamModel/GetTeamModel";
import { TeamInvitationModel } from "../models/TeamModel/TeamInvitationModel";
import { TeamRequestModel } from "../models/TeamModel/TeamRequestModel";
import { TeamRewardPlanModel } from "../models/TeamModel/TeamRewardPlanModel";
import { TeamModel } from "../models/TeamModel/TeamModel";
import { updateTeamJoiningModel } from "../models/TeamModel/updateTeamJoiningModel";
import { TeamJoiningRequestModel } from 'src/models/TeamModel/TeamJoiningRequestModel';
import { BrandCreate, BrandInfo } from 'src/models/BrandModel';
import { GameCreate, GameInfo, GameSupportReward } from 'src/models/GameModel';


@Injectable({
  providedIn: 'root'
})
export class ConnectSVService {

  public url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:32768/"
  }

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
  createTeam(item: GetTeamModel) {
    return this.http.post<GetTeamModel>(`${this.url}Team`, item);
  }
  getTeam() {
    return this.http.get<TeamModel[]>(`${this.url}Team`);
  }
  rewardPlantTeam(item: TeamRewardPlanModel) {
    return this.http.post<TeamRewardPlanModel>(`${this.url}Team/RewardPlan`, item);
  }
  createInvitationTeam(item: TeamInvitationModel) {
    return this.http.post<TeamInvitationModel>(`${this.url}Team/Invitation`, item);
  }
  createRequestTeam(item: TeamRequestModel) {
    return this.http.post<TeamRequestModel>(`${this.url}Team/RequestToPlay`, item);
  }
  updateTeamJoining(id: string, item: updateTeamJoiningModel) {
    return this.http.put(`${this.url}Team/TeamJoining${id}`, item);
  }
  getInvitationById(id: string) {
    return this.http.get<TeamJoiningRequestModel>(`${this.url}Team/Invitation${id}`);
  }
  getTeamById(id: string) {
    return this.http.get<TeamModel>(`${this.url}Team/${id}`);
  }
  deleteTeam(id: string) {
    return this.http.delete<TeamModel>(`${this.url}Team/${id}`);
  }

  //Brand
  getBrandAll() {
    return this.http.get<BrandInfo[]>(`${this.url}Brand`);
  }

  createBrand(item: BrandCreate) {
    return this.http.post<BrandCreate>(`${this.url}Brand`, item);
  }

  getBrandById(id: string) {
    return this.http.get<BrandInfo>(`${this.url}Brand/${id}`);
  }

  deleteBrand(id: string) {
    return this.http.delete<BrandInfo>(`${this.url}Brand/${id}`);
  }

  //Game
  getGames() {
    return this.http.get<GameInfo[]>(`${this.url}Game`);
  }

  getGameById(id: string) {
    return this.http.get<GameInfo>(`${this.url}Game${id}`);
  }
  deleteGame(id: string) {
    return this.http.delete<GameInfo>(`${this.url}Game/${id}`);
  }

  createGame(item: GameCreate) {
    return this.http.post<GameCreate>(`${this.url}Game`, item);
  }

  supportRewardPlan(item: GameSupportReward) {
    return this.http.post<GameSupportReward>(`${this.url}Game`, item);
  }

}
