import { Host, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tournament } from 'src/models/Tournament';
import { CreateTeamModel } from "../models/TeamModel/CreateTeamModel";
import { CreateTeamInvitationModel } from "../models/TeamModel/CreateTeamInvitationModel";
import { TeamRequestModel } from "../models/TeamModel/TeamRequestModel";
import { TeamRewardPlanModel } from "../models/TeamModel/TeamRewardPlanModel";
import { TeamModel } from "../models/TeamModel/TeamModel";
import { updateTeamJoiningModel } from "../models/TeamModel/updateTeamJoiningModel";
import { TeamInvitationModel } from '../models/TeamModel/TeamInvitationModel';
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

  //Guild
  createGuild(item: GuildReq) {
    return this.http.post<GuildReq>(this.url + "Guild", item);
  }

  getGuild() {
    return this.http.get<Guild[]>(this.url + "Guild");
  }

  getGuildByID(id: string) {
    return this.http.get<Guild>(this.url + "Guild/" + id);
  }

  deleteGuildByID(id: string) {
    return this.http.delete<Guild>(this.url + "Guild/" + id);
  }

  //Host
  createHost(item: HostReq) {
    return this.http.post<HostReq>(this.url + "Host", item);
  }

  getHost() {
    return this.http.get<Host[]>(this.url + "Host");
  }

  getHostByID(id: string) {
    return this.http.get<Host>(this.url + "Host/" + id);
  }

  deleteHostByID(id: string) {
    return this.http.delete<Host>(this.url + "Host/" + id);
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

  deletePlayerByID(id: string) {
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
  createTeam(item : CreateTeamModel){
    return this.http.post<CreateTeamModel>(`${this.url}Team`,item);
  }
  getTeam(){
    return this.http.get<TeamModel[]>(`${this.url}Team`);
  }
  rewardPlantTeam(item : TeamRewardPlanModel){
    return this.http.post<TeamRewardPlanModel>(`${this.url}Team/RewardPlan`,item);
  }
  createInvitationTeam(item : CreateTeamInvitationModel){
    return this.http.post<CreateTeamInvitationModel>(`${this.url}Team/Invitation`,item);
  }
  createRequestTeam(item : TeamRequestModel){
    return this.http.post<TeamRequestModel>(`${this.url}Team/RequestToPlay`,item);
  }
  updateTeamJoining(id: string,item : updateTeamJoiningModel){
    return this.http.put(`${this.url}Team/TeamJoining/${id}`,item);
  }
  getInvitationById(id : string){
    return this.http.get<TeamInvitationModel>(`${this.url}Team/Invitation${id}`);
  }
  getTeamById(id : string){
    return this.http.get<TeamModel>(`${this.url}Team/${id}`);
  }
  deleteTeam(id : string){
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
