import { Component, OnInit } from '@angular/core';
import { YTCHttpService } from '../-core';
import { N163Service } from './163.service';

@Component({
    templateUrl: './163.component.html',
    styleUrls: ['./163.component.css']
})
export class N163Component implements OnInit {
    constructor(
        private http: YTCHttpService,
        private n163: N163Service
    ) {}

    public ngOnInit() {
        //
    }

    public tryReq() {
        this.n163.Post('/api/search/get/', 's=玫瑰色的你&limit=20&type=1&offset=0').then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }
}
