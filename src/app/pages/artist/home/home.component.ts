import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistService } from '../artist.service';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    public artists: any[];
    constructor(
        private artist: ArtistService,
        private router: Router
    ) {}
    public ngOnInit() {
        this.artist.Top(1, 50).subscribe((res) => {
            console.log(res);
            this.artists = res;
        }, (err) => {
            console.log(err);
        });
    }
    public detail(id: number) {
        this.router.navigate(['/artist/detail', id]);
    }
}
