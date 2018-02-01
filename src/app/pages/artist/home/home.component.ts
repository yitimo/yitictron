import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    public artists: any[];
    constructor(
        private artist: ArtistService
    ) {}
    public ngOnInit() {
        this.artist.Top(1, 50).subscribe((res) => {
            console.log(res);
            this.artists = res;
        }, (err) => {
            console.log(err);
        });
    }
}
