import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
    templateUrl: 'playlist.component.html',
    styleUrls: ['playlist.component.css']
})

export class PlaylistComponent implements OnInit {
    public playlists: any[];
    public playlistCount: number;
    public page: number;
    public limit: number;
    private words: string;
    constructor(
        private search: SearchService,
        private aRoute: ActivatedRoute
    ) {
        this.page = 1;
        this.limit = 10;
        this.playlistCount = 0;
        this.playlists = [];
    }
    public ngOnInit() {
        this.words = this.aRoute.snapshot.params['words'];
        if (!this.words || !this.words.length) {
            console.log('no words to search');
            return;
        }
        this.search.Playlist(this.words).subscribe((res) => {
            console.log(res);
            this.playlists = res.playlists;
            this.playlistCount = res.playlistCount;
        }, (err) => {
            console.log(err);
        });
    }
}
