export class PlayerReq {
    name: string;
    referenceId: string;
}

export class Player {
    _id: string;
    name: string;
    avatarUrl: string;
    brandId: string;
    memberOfGuildId: string;
    refId: string;
    createdDate: Date;
    suspendedDate: Date;
}