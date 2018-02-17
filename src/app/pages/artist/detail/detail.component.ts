import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../artist.service';

@Component({
    templateUrl: 'detail.component.html',
    styleUrls: ['detail.component.css']
})
export class DetailComponent implements OnInit {
    public id: number;
    public detail: any;
    public hotSongs: any[];

    constructor(
        private aRoute: ActivatedRoute,
        private artist: ArtistService
    ) {
        this.id = 0;
        this.detail = null;
        this.hotSongs = [];
    }

    public ngOnInit() {
        this.id = this.aRoute.snapshot.params['id'];
        this.artist.Detail(this.id, 1, 10).subscribe((res) => {
            this.detail = res.artist;
            this.hotSongs = res.hotSongs;
            console.log(this.detail);
            console.log(this.hotSongs);
        }, (err) => {
            console.log(err);
        });
    }
}
