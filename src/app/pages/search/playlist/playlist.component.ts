import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
    templateUrl: 'playlist.component.html',
    styleUrls: ['playlist.component.css']
})

export class PlaylistComponent implements OnInit {
    @HostBinding('class.flex-y') public flexC: boolean = true;
    public loading: boolean = false;
    public playlists: any[] = [];
    public playlistCount: number = 0;
    public page: number = 1;
    public limit: number = 20;
    private words: string;
    constructor(
        private search: SearchService,
        private aRoute: ActivatedRoute
    ) {}
    public ngOnInit() {
        this.words = this.aRoute.snapshot.params['words'];
        if (!this.words || !this.words.length) {
            console.log('no words to search');
            return;
        }
        this.doPagination(1);
    }
    public doPagination(page: number) {
        if (this.loading) {
            return;
        }
        this.loading = true;
        this.search.Playlist(this.words, page, this.limit).subscribe((res) => {
            this.page = page;
            this.playlists = res.playlists;
            this.playlistCount = res.playlistCount;
            this.loading = false;
        }, (err) => {
            console.log(err);
        });
    }
}
