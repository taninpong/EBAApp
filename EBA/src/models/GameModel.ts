
export class GameCreate {
    name: string;
    bannerUrl: string;
    description: string;
}

export class GameInfo {
    _id: string;
    name: string;
    bannerUrl: string;
    description: string;
    createdDate: string;
    suspendedDate: string;
}

export class GameSupportReward {
    gameId: string;
    rewardPlanId: string;
}