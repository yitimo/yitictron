import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

const OscillatorType = {
    SINE: 'sine',
    SQUARE: 'square',
    TRIANGLE: 'triangle',
    SAWTOOTH: 'sawtooth'
};

const KEYMAP = {
    q: 0,
    w: 1,
    e: 2,
    r: 3,
    t: 4,
    y: 5,
    u: 6,
    i: 7,

    a: 8,
    s: 9,
    d: 10,
    f: 11,
    g: 12,
    h: 13,
    j: 14
};

const KEYSKIP = {
    z: 0,
    x: 15,
    c: 30,
    v: 45,
    b: 60,
    n: 75
};

const TONES: Tone[] = [
    {frequency: 27.5, code: 'A2'},
    {frequency: 29.1, code: '#A2'},
    {frequency: 30.9, code: 'B2'},

    {frequency: 32.7, code: 'C1'},
    {frequency: 34.6, code: '#C1'},
    {frequency: 36.7, code: 'D1'}, // 5
    {frequency: 38.9, code: '#D1'},
    {frequency: 41.2, code: 'E1'},
    {frequency: 43.9, code: 'F1'},
    {frequency: 46.2, code: '#F1'},
    {frequency: 49.0, code: 'G1'}, // 10
    {frequency: 51.9, code: '#G1'},
    {frequency: 55.0, code: 'A1'},
    {frequency: 58.3, code: '#A1'},
    {frequency: 61.7, code: 'B1'},

    {frequency: 65.4, code: 'C'}, // 15
    {frequency: 69.3, code: '#C'},
    {frequency: 73.4, code: 'D'},
    {frequency: 77.8, code: '#D'},
    {frequency: 82.4, code: 'E'},
    {frequency: 87.3, code: 'F'}, // 20
    {frequency: 92.5, code: '#F'},
    {frequency: 98.0, code: 'G'},
    {frequency: 103.8, code: '#G'},
    {frequency: 110.0, code: 'A'},
    {frequency: 116.5, code: '#A'}, // 25
    {frequency: 123.5, code: 'B'},

    {frequency: 130.8, code: 'c'},
    {frequency: 138.6, code: '#c'},
    {frequency: 146.8, code: 'd'},
    {frequency: 155.6, code: '#d'}, // 30
    {frequency: 164.8, code: 'e'},
    {frequency: 174.6, code: 'f'},
    {frequency: 185.0, code: '#f'},
    {frequency: 196.0, code: 'g'},
    {frequency: 207.7, code: '#g'}, // 35
    {frequency: 220.0, code: 'a'},
    {frequency: 233.1, code: '#a'},
    {frequency: 246.9, code: 'b'},

    {frequency: 261.6, code: 'c1', simple: '1'},
    {frequency: 277.2, code: '#c1'}, // 40
    {frequency: 293.7, code: 'd1', simple: '2'},
    {frequency: 311.1, code: '#d1'},
    {frequency: 329.6, code: 'e1', simple: '3'},
    {frequency: 349.2, code: 'f1', simple: '4'},
    {frequency: 370.0, code: '#f1'}, // 45
    {frequency: 392.0, code: 'g1', simple: '5'},
    {frequency: 415.3, code: '#g1'},
    {frequency: 440.0, code: 'a1', simple: '6'},
    {frequency: 466.2, code: '#a1'},
    {frequency: 493.9, code: 'b1', simple: '7'}, // 50

    {frequency: 523.3, code: 'c2'},
    {frequency: 554.4, code: '#c2'},
    {frequency: 587.3, code: 'd2'},
    {frequency: 622.3, code: '#d2'},
    {frequency: 659.3, code: 'e2'}, // 55
    {frequency: 698.5, code: 'f2'},
    {frequency: 740.0, code: '#f2'},
    {frequency: 784.0, code: 'g2'},
    {frequency: 830.6, code: '#g2'},
    {frequency: 880.0, code: 'a2'}, // 60
    {frequency: 932.3, code: '#a2'},
    {frequency: 987.8, code: 'b2'},

    {frequency: 1047, code: 'c3'},
    {frequency: 1109, code: '#c3'},
    {frequency: 1175, code: 'd3'}, // 65
    {frequency: 1245, code: '#d3'},
    {frequency: 1319, code: 'e3'},
    {frequency: 1397, code: 'f3'},
    {frequency: 1480, code: '#f3'},
    {frequency: 1568, code: 'g3'}, // 70
    {frequency: 1661, code: '#g3'},
    {frequency: 1760, code: 'a3'},
    {frequency: 1865, code: '#a3'},
    {frequency: 1976, code: 'b3'},

    {frequency: 2093, code: 'c4'}, // 75
    {frequency: 2217, code: '#c4'},
    {frequency: 2349, code: 'd4'},
    {frequency: 2489, code: '#d4'},
    {frequency: 2637, code: 'e4'},
    {frequency: 2794, code: 'f4'}, // 80
    {frequency: 2960, code: '#f4'},
    {frequency: 3136, code: 'g4'},
    {frequency: 3322, code: '#g4'},
    {frequency: 3520, code: 'a4'},
    {frequency: 3729, code: '#a4'}, // 85
    {frequency: 3951, code: 'b4'},

    {frequency: 4186, code: 'c5'},
    {frequency: 0, code: '0'} // 第89个键 作为空拍
];

@Component({
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    public keys = TONES;
    public baseTone: number;
    public oscillatorConfig = {
        type: OscillatorType.SINE
    };
    private audioContext: AudioContext;

    public ngOnInit() {
        this.baseTone = 0; // 15为系数
        this.audioContext = new AudioContext();
        Observable.fromEvent(document, 'keydown').subscribe((event: KeyboardEvent) => {
            if (event.key in KEYMAP) {
                // 输入了音调
                this.play(this.getTone(KEYMAP[event.key] + this.baseTone));
                return;
            }
            if (event.key in KEYSKIP) {
                // 切换音调
                this.baseTone = KEYSKIP[event.key];
            }
            if (event.key === 'space') {
                // 输入了空拍
                this.play(this.getTone(88));
                return;
            }
        });
    }

    public getKeyMap(index: number) {
        const list = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'a', 's', 'd', 'f', 'g', 'h', 'j'];
        return list[index] || '未知';
    }

    public play(tone: Tone) {
        this.makeSound(tone.frequency);
    }
    /**
     * 根据输入的keycode拿到对应的音调 找不到返回空
     * @param key keycode
     */
    private getTone(index: number) {
        return TONES[index] || null;
    }

    private makeSound(frequency: number) {
        // 创建一个OscillatorNode, 它表示一个周期性波形（振荡），基本上来说创造了一个音调
        let oscillator = this.audioContext.createOscillator();
        // 创建一个GainNode,它可以控制音频的总音量
        let gainNode = this.audioContext.createGain();
        // 把音量，音调和终节点进行关联
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        // 指定音调的类型，其他还有square|triangle|sawtooth
        oscillator.type = <OscillatorType> this.oscillatorConfig.type;
        // 设置当前播放声音的频率，也就是最终播放声音的调调
        oscillator.frequency.value = frequency;
        // 当前时间设置音量为0
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        // 0.01秒后音量为1
        gainNode.gain.linearRampToValueAtTime(1, this.audioContext.currentTime + 0.01);
        // 音调从当前时间开始播放
        oscillator.start(this.audioContext.currentTime);
        // 1秒内声音慢慢降低，是个不错的停止声音的方法
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 1);
        // 1秒后完全停止声音
        oscillator.stop(this.audioContext.currentTime + 1);
    }
}

export interface Tone {
    frequency: number; // 实际决定音调的数值
    code: string; // 用于表现的音符
    simple?: string;
}

// tslint:disable-next-line:max-classes-per-file
@Pipe({name: 'keyskip'})
export class KeySkipPipe implements PipeTransform {
    public transform(value: Tone[], base: number): Tone[] {
        return value.slice(base, base + 15);
    }
}
