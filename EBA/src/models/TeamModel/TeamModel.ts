export class TeamModel {
    _id: string;
    name: string;
    bannerUrl: string;
    captain: Captain;
    member: Member[];
    requirements: TeamRequirement[];
    tournamentId: string;
    teamRewardPlanId: string;
    status: string;
    CreatedDate: Date;
    LastUpdatedDate: Date;
    SuspendedDate: Date; 
}
export class Captain {
    playerId: string;
    agentGuildId: string;
}

export class Member {
    priority: number
    role: string;
    playerId: string;
}

export class TeamRequirement {
    role: string;
    minimumRating: number;
}