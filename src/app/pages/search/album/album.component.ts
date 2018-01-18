import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
    templateUrl: 'album.component.html',
    styleUrls: ['album.component.css']
})

export class AlbumComponent implements OnInit {
    public albums: any[];
    public albumCount: number;
    public page: number;
    public limit: number;
    private words: string;
    constructor(
        private search: SearchService,
        private aRoute: ActivatedRoute
    ) {
        this.page = 1;
        this.limit = 10;
        this.albumCount = 0;
        this.albums = [];
    }
    public ngOnInit() {
        this.words = this.aRoute.snapshot.params['words'];
        if (!this.words || !this.words.length) {
            console.log('no words to search');
            return;
        }
        this.search.Album(this.words).subscribe((res) => {
            console.log(res);
            this.albums = res.albums;
            this.albumCount = res.albumCount;
        }, (err) => {
            console.log(err);
        });
    }
}
