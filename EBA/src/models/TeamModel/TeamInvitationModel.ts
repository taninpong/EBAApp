export class TeamInvitationModel {
    _id : string; 
    TeamId : string;                           
    CreatedByPlayerId : string;    
    RequestPlayerIdToJoin : string;  
    Role : string;  
    Message : string;  
    CreatedDate : Date;
    AcceptedDate : Date;
    RejectedDate : Date;
    SuspendedDate : Date;
    JoiningType : string;  
    CompletedByPlayerId : string;  
}