import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
    templateUrl: 'artist.component.html',
    styleUrls: ['artist.component.css']
})

export class ArtistComponent implements OnInit {
    public artists: any[];
    public artistCount: number;
    public page: number;
    public limit: number;
    private words: string;
    constructor(
        private search: SearchService,
        private aRoute: ActivatedRoute
    ) {
        this.page = 1;
        this.limit = 10;
        this.artistCount = 0;
        this.artists = [];
    }
    public ngOnInit() {
        this.words = this.aRoute.snapshot.params['words'];
        if (!this.words || !this.words.length) {
            console.log('no words to search');
            return;
        }
        this.search.Artist(this.words).subscribe((res) => {
            console.log(res);
            this.artists = res.artists;
            this.artistCount = res.artistCount;
        }, (err) => {
            console.log(err);
        });
    }
}
