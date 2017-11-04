import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { N163Service } from '../163.service';
import { PlayerService, Audio } from '../../../-core';

@Component({
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
    public $audio: Audio;
    public musicInfo: any;
    public songInfo: any;
    constructor(
        private aRoute: ActivatedRoute,
        private n163: N163Service,
        private player: PlayerService
    ) {
        //
    }

    public ngOnInit() {
        const id = this.aRoute.snapshot.params['id'] || 0;
        if (!id) {
            console.log('不行啊没id');
        } else {
            this.n163.MusicInfo(id).subscribe((res) => {
                if (res.state) {
                    this.musicInfo = res.data[0];
                    this.n163.Download(this.musicInfo.id).subscribe((_res) => {
                        if (_res.state) {
                            this.songInfo = _res.data;
                        }
                    });
                }
            }, (err) => {
                console.log(err);
            });
        }
    }

    public toggle() {
        if (!this.$audio) {
            // this.$audio = this.player.Audio(this.songInfo.)
        }
    }
}
