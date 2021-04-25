import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
    templateUrl: 'song.component.html',
    styleUrls: ['song.component.css']
})

export class SongComponent implements OnInit {
    @HostBinding('class.flex-y') public flexC: boolean = true;
    public loading: boolean = false;
    public songs: any[] = [];
    public songCount: number = 0;
    public page: number = 1;
    public limit: number = 10;
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
        this.search.Song(this.words, page).subscribe((res) => {
            this.page = page;
            this.songs = res.songs;
            this.songCount = res.songCount;
            this.loading = false;
        }, (err) => {
            console.log(err);
        });
    }
}
