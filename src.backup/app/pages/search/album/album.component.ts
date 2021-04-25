import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
    templateUrl: 'album.component.html',
    styleUrls: ['album.component.css']
})

export class AlbumComponent implements OnInit {
    @HostBinding('class.flex-y') public flexC: boolean = true;
    public loading: boolean = false;
    public albums: any[] = [];
    public albumCount: number = 0;
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
        this.search.Album(this.words, page).subscribe((res) => {
            this.page = page;
            this.albums = res.albums;
            this.albumCount = res.albumCount;
            this.loading = false;
        }, (err) => {
            console.log(err);
        });
    }
}
