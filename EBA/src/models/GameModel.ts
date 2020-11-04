
export class GameCreate {
    name: string;
    bannerUrl: string;
    description: string;
}

export class GameIndo {
    _id: string;
    Name: string;
    BannerUrl: string;
    Description: string;
    CreatedDate: string;
    SuspendedDate: string;
}

export class CreateGameSupportRewardPlanRequest {
    GameId: string;
    RewardPlanId: string;
}