import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Tone, StudioService, OscillatorType, TONES, KEYMAP, KEYSKIP } from '../studio.service';
import { Http, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    public wkeys = TONES;
    public baseTone: number;
    public oscillatorConfig = {
        type: OscillatorType.SINE
    };
    public pressed: string[];
    constructor(
        private studio: StudioService,
        private http: Http
    ) {}
    public ngOnInit() {
        this.pressed = [];
        this.baseTone = 0;
        Observable.fromEvent(document, 'keydown').subscribe((event: KeyboardEvent) => {
            let findMap = KEYMAP.find((key) => key.key === event.key);
            if (findMap) {
                // 输入了音调
                let tone = this.getTone(findMap.base + this.baseTone);
                let index = this.pressed.indexOf(tone.code);
                if (index >= 0) {
                    return; // 一直按着不重复播放
                } else {
                    this.pressed.push(tone.code);
                }
                this.studio.makeSound(tone.frequency, this.oscillatorConfig.type);
                return;
            }
            let findSkip = KEYSKIP.find((key) => key.key === event.key);
            if (findSkip) {
                // 切换音调
                this.baseTone = findSkip.base;
                document.getElementById('keyboard').scrollLeft = this.baseTone * 29;
            }
            if (event.key === 'space') {
                // 输入了空拍
                this.studio.makeSound(0, this.oscillatorConfig.type);
                return;
            }
        });
        Observable.fromEvent(document, 'keyup').subscribe((event: KeyboardEvent) => {
            let findMap = KEYMAP.find((key) => key.key === event.key);
            if (findMap) {
                // 输入了音调
                let tone = this.getTone(findMap.base + this.baseTone);
                let index = this.pressed.indexOf(tone.code);
                if (index >= 0) {
                    this.pressed.splice(index, 1);
                }
                return;
            }
        });
        let duo = TONES.findIndex((tone) => tone.simple === '1');
        // tslint:disable-next-line:max-line-length
        this.studio.play('1  23  13 1 3   2  344324       3  45  35 3 5   4  566546       5  123456       6  234567       7  34567>1     >176 3 7 5 >1 ', 4);
    }

    public makeSound(tone: Tone) {
        this.studio.makeSound(tone.frequency, this.oscillatorConfig.type);
    }

    public getKeyMap(base: number) {
        return KEYMAP.find((key) => key.base === base - this.baseTone);
    }

    /**
     * 根据输入的keycode拿到对应的音调 找不到返回空
     * @param key keycode
     */
    private getTone(base: number) {
        let find = TONES.find((tone) => (tone.rising && tone.rising.base === base) || tone.base === base) || null;
        return (find && find.rising && find.rising.base === base) ? find.rising : find;
    }
}
