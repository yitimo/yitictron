import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';

let AUDIO_ID = 0;

export class Audio {
    public Id: number;
    private audio: HTMLAudioElement;
    private state: string;
    private canplaythrough: boolean;
    constructor(
        audioId: number,
        source: string
    ) {
        this.audio = window.document.createElement('audio');
        this.audio.src = source;
        this.audio.autoplay = false;
        this.Id = audioId;
        this.canplaythrough = false;
    }
    public listen() {
        return new Observable((observer) => {
            this.audio.oncanplay = () => observer.next(this.getNextData('canplay'));
            this.audio.oncanplaythrough = () => observer.next(this.getNextData('canplaythrough'));
            this.audio.onabort = () => observer.next(this.getNextData('abort'));
            this.audio.onended = () => observer.next(this.getNextData('end'));
            this.audio.onplay = () => observer.next(this.getNextData('play'));
            this.audio.onpause = () => observer.next(this.getNextData('pause'));
            this.audio.ontimeupdate = () => observer.next(this.getNextData('skip'));
        });
    }
    public duration() {
        return Observable.of(this.getNextData('progress'));
    }
    /**
     * 播放返回true
     * 暂停返回false
     */
    public toggle() {
        if (this.audio.paused) {
            this.audio.play();
            return true;
        } else {
            this.audio.pause();
            return false;
        }
    }
    public skip(action: boolean | number) {
        if (typeof action === 'number' && (action >= 0 || action <= 100)) {
            this.audio.currentTime = this.audio.duration * action / 100;
        } else if (action) {
            this.audio.currentTime = this.audio.currentTime + 5 > this.audio.duration ? this.audio.duration : this.audio.currentTime + 5;
        } else {
            this.audio.currentTime = this.audio.currentTime - 5 < 0 ? 0 : this.audio.currentTime - 5;
        }
    }
    public stop() {
        this.audio.parentNode.removeChild(this.audio);
    }
    private getNextData(_state: string) {
        return {
            current: this.audio ? this.audio.currentTime || 0 : 0,
            total: this.audio ? this.audio.duration || 0 : 0,
            progress: this.getProgress(),
            state: _state
        };
    }
    private getProgress(): number[][] {
        let rs = [];
        for (let i = 0; i < this.audio.buffered.length; i++) {
            rs.push([this.audio.buffered.start(i), this.audio.buffered.end(i)]);
        }
        return rs;
    }
}

// tslint:disable-next-line:max-classes-per-file
@Injectable()
export class PlayerService {
    private audios: number[];
    // private vedio: HTMLVideoElement;
    constructor () {
        // this.audio = new Audio();
    }
    public Audio(source: string): Audio {
        this.audios.push(AUDIO_ID);
        const audio = new Audio(AUDIO_ID++, source);
        return audio;
    }
}
