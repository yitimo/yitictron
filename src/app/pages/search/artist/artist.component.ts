import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
    templateUrl: 'artist.component.html',
    styleUrls: ['artist.component.css']
})

export class ArtistComponent implements OnInit {
    @HostBinding('class.flex-y') public flexC: boolean = true;
    public loading: boolean = false;
    public artists: any[] = [];
    public artistCount: number = 0;
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
        this.search.Artist(this.words, page).subscribe((res) => {
            this.page = page;
            this.artists = res.artists;
            this.artistCount = res.artistCount;
            this.loading = false;
        }, (err) => {
            console.log(err);
        });
    }
}
