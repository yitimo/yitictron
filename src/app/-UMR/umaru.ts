import { Injectable } from '@angular/core';

// umaru is a service to play url audio or vedio

export interface AudioSrc {
    url: string;
    id?: number;
    size?: number;
    br?: number;
}

export interface Audio extends AudioSrc {

}

@Injectable()
export class Umaru {
    // private audioList: UrlAudio[];
}
