import { Component, OnInit } from '@angular/core';
import { PLaylistService } from '../playlist.service';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    public total: number;
    public playlists: any[];
    constructor(
        private playlist: PLaylistService
    ) {}
    public ngOnInit() {
        this.playlist.All(1, 5).subscribe((res) => {
            console.log(res);
            this.playlists = res.playlists;
            this.total = res.total;
        }, (err) => {
            console.log(err);
        });
    }
}
