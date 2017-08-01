import { Component, OnInit } from '@angular/core';
import { YTCHttpService } from '../-core';
import { N163Service } from './163.service';

@Component({
    templateUrl: './163.component.html',
    styleUrls: ['./163.component.css']
})
export class N163Component implements OnInit {
    public words: string;
    constructor(
        private http: YTCHttpService,
        private n163: N163Service
    ) {}

    public ngOnInit() {
        //
    }

    public onEnter(e: KeyboardEvent) {
        if (e.code === 'Enter') {
            console.log(this.words);
        }
    }

    public tryReq() {
        this.n163.Search('浮夸', []).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }
}
