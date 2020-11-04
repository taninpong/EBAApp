export class TeamModel {
    _id: string;
    name: string;
    bannerUrl: string;
    captain: Captain;
    teamMember: TeamMember[];
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

export class TeamMember {
    priority: number
    role: string;
    playerId: string;
}

export class TeamRequirement {
    role: string;
    minimumRating: number;
}