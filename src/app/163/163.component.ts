import { Component, OnInit } from '@angular/core';
import { state, transition, animate, style, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { YTCHttpService } from '../-core';
import { N163Service } from './163.service';

@Component({
    templateUrl: './163.component.html',
    styleUrls: ['./163.component.css'],
    animations: [
        trigger('search', [
            state('middle', style({top: '50%', transform: 'translateY(-50%)'})),
            state('top', style({top: 0, transform: 'translateY(0)'})),
            transition('middle => top', [
                style({top: 0, transform: 'translateY(0)'}),
                animate('0.5s linear')
            ]),
            transition('top => middle', [
                animate('0.5s linear', style({top: 0, transform: 'translateY(0)'}))
            ])
        ])
    ]
})
export class N163Component implements OnInit {
    public words: string;
    constructor(
        private http: YTCHttpService,
        private n163: N163Service,
        private router: Router
    ) {}

    public ngOnInit() {
        //
    }

    public routeCheck() {
        return this.router.url.split('163')[1].length > 1 ? 'top' : 'middle';
    }

    public onEnter(e: KeyboardEvent) {
        if (e.code === 'Enter') {
            this.router.navigate(['/163/search', this.words || '']);
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
