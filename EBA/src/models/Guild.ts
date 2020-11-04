export class GuildReq {
    name: string;
    bannerUrl: string;
    playerId: string;
    isOfficial: boolean;
}

export class Guild {
    _id: string;
    name: string;
    bannerUrl: string;
    type: string;
    createdByPlayerId: string;
    createdDate: Date;
    suspendedDate: Date;
}