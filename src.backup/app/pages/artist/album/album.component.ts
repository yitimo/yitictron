import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../artist.service';

@Component({
    templateUrl: 'album.component.html',
    styleUrls: ['album.component.css']
})

export class AlbumComponent implements OnInit {
    public id: number;
    public detail: any;
    public albums: any[];
    constructor(
        private aRoute: ActivatedRoute,
        private artist: ArtistService
    ) {
        //
    }

    public ngOnInit() {
        this.id = this.aRoute.snapshot.params['id'];
        this.artist.Albums(this.id, 1, 10).subscribe((res) => {
            console.log(res);
            this.detail = res.artist;
            this.albums = res.hotAlbums;
        }, (err) => {
            console.log(err);
        });
    }
}
