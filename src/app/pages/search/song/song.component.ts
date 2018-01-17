import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
    templateUrl: 'song.component.html',
    styleUrls: ['song.component.css']
})

export class SongComponent implements OnInit {
    public songs: any[];
    public songCount: number;
    public page: number;
    public limit: number;
    private words: string;
    constructor(
        private search: SearchService,
        private aRoute: ActivatedRoute
    ) {
        this.page = 1;
        this.limit = 10;
        this.songCount = 0;
        this.songs = [];
    }
    public ngOnInit() {
        this.words = this.aRoute.snapshot.params['words'];
        if (!this.words || !this.words.length) {
            console.log('no words to search');
            return;
        }
        this.search.Song(this.words).subscribe((res) => {
            console.log(res);
            this.songs = res.songs;
            this.songCount = res.songCount;
        }, (err) => {
            console.log(err);
        });
    }
}
