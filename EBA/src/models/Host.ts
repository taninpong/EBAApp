import { Data } from '@angular/router';

export class HostReq {
    name: string;
    bannerUrl: string;
}

export class Host {
    _id: string;
    name: string;
    bannerUrl: string;
    createdDate: Date;
    suspendedDate: Date;
}