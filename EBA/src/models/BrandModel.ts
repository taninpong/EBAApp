
export class BrandCreate {
    name: string;
    bannerUrl: string;
    playerId: string;
}

export class BrandInfo {
    _id: string;
    name: string;
    bannerUrl: string;
    createdByPlayerId: string;
    createdDate: string;
    suspendedDate: string;
}