import { Component, OnInit } from '@angular/core';
import { ConnectSVService } from '../connect-sv.service';

import { CreateTeamModel } from "../../models/TeamModel/CreateTeamModel";
import { CreateTeamInvitationModel } from "../../models/TeamModel/CreateTeamInvitationModel";
import { TeamRequestModel } from "../../models/TeamModel/TeamRequestModel";
import { TeamRewardPlanModel } from "../../models/TeamModel/TeamRewardPlanModel";
import { TeamModel } from "../../models/TeamModel/TeamModel";
import { updateTeamJoiningModel } from "../../models/TeamModel/updateTeamJoiningModel";
import { TeamInvitationModel } from '../../models/TeamModel/TeamInvitationModel';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  public createteam: CreateTeamModel = new CreateTeamModel;
  public teamModel: TeamModel = new TeamModel;
  public teamdata: TeamModel = new TeamModel;
  public listTeamModel: TeamModel[];
  public teamRewardPlanModel: TeamRewardPlanModel = new TeamRewardPlanModel;
  public teamRequestModel: TeamRequestModel = new TeamRequestModel;
  public updateTeamJoiningModel: updateTeamJoiningModel = new updateTeamJoiningModel;
  public CreateteamInvitationModel: CreateTeamInvitationModel = new CreateTeamInvitationModel;
  public teamInvitationID: TeamInvitationModel = new TeamInvitationModel;
  public ID: string;
  public InvitationId: string;
  public teamId: string;
  public delteamId: string;
  public delStatus: any;

  constructor(private service: ConnectSVService) { }

  ngOnInit() {
  }

  createTeam() {
    this.service.createTeam(this.createteam).subscribe(data => {
      console.log(data);
    });
  }

  getTeam() {
    this.service.getTeam().subscribe(data => {
      this.listTeamModel = data;
      console.log(this.listTeamModel);
    });
  }
  createRewardPlan(){
    this.service.rewardPlantTeam(this.teamRewardPlanModel).subscribe(data => {
      this.teamRewardPlanModel = data;
      console.log(data);
    });
  }
  createInvitation(){
    this.service.createInvitationTeam(this.CreateteamInvitationModel).subscribe(data => {
      this.CreateteamInvitationModel = data;
      console.log(data);
    });
  }
  createRequestTeam(){
    this.service.createRequestTeam(this.teamRequestModel).subscribe(data => {
      this.teamRequestModel = data;
      console.log(data);
    });
  }

  updateTeamJoin(){
    this.ID = this.updateTeamJoiningModel.fromPlayerId;
    console.log(this.updateTeamJoiningModel.isAccept);
    this.service.updateTeamJoining(this.ID,this.updateTeamJoiningModel).subscribe(data => {
      console.log(data);
    });
  }
  getInvitationById(){
    this.service.getInvitationById(this.InvitationId).subscribe(data => {
      this.teamInvitationID = data;
      console.log(this.teamInvitationID);
    });
  }
  getTeamById(){
    this.service.getTeamById(this.teamId).subscribe(data => {
      this.teamdata = data;
      console.log(this.teamdata);
    });
  }

  deleteTeamByID(){
    this.service.deleteTeam(this.delteamId).subscribe(data =>{
      this.delStatus = data;
      console.log(this.delStatus);
    });
  }
}
