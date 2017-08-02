import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { N163Service } from '../163.service';
import { DialogPopupComponent } from '../../-shared';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    public words: string;
    public songs: any[];
    public songCount: number;
    public page: number;
    constructor(
        private aRoute: ActivatedRoute,
        private n163: N163Service,
        public dialog: MdDialog
    ) {}

    public ngOnInit() {
        this.aRoute.params.subscribe((params) => {
            this.words = params['words'] || '';
            if (this.words.length) {
                this.page = 0;
                this.n163.Search(this.words, [1, this.page]).then((res) => {
                    this.songs = res.songs;
                    this.songCount = res.songCount;
                }).catch((err) => {
                    let dialogRef = this.dialog.open(DialogPopupComponent, {data: {msg: err}});
                });
            }
        });
    }

    public pageChange(e) {
        this.page = e.pageIndex;
        this.n163.Search(this.words, [1, this.page]).then((res) => {
            this.songs = res.songs;
            this.songCount = res.songCount;
        }).catch((err) => {
            let dialogRef = this.dialog.open(DialogPopupComponent, {data: {msg: err}});
        });
    }
}
