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
    public tempResult: string;
    constructor(
        private aRoute: ActivatedRoute,
        private n163: N163Service,
        public dialog: MdDialog
    ) {}

    public ngOnInit() {
        this.aRoute.params.subscribe((params) => {
            this.words = params['words'] || '';
            if (this.words.length) {
                this.n163.Search(this.words).then((res) => {
                    console.log(res);
                    this.tempResult = JSON.stringify(res);
                }).catch((err) => {
                    let dialogRef = this.dialog.open(DialogPopupComponent, {data: {msg: err}});
                });
            }
        });
    }
}
