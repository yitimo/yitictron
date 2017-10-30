import { Component, OnInit } from '@angular/core';
import { state, transition, animate, style, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { Http } from '../../-core';
import { N163Service } from './163.service';

@Component({
    templateUrl: './163.component.html',
    styleUrls: ['./163.component.css'],
    animations: [
        trigger('search', [
            state('middle', style({top: '50%', left: '50%', transform: 'translate(-50%, -50%)'})),
            state('top', style({top: 0, left: '50%', transform: 'translate(-50%, 0)'})),
            transition('middle => top', [
                style({top: 0, left: '50%', transform: 'translate(-50%, 0)'}),
                animate('0.5s linear')
            ]),
            transition('top => middle', [
                animate('0.5s linear', style({top: 0, left: '50%', transform: 'translate(-50%, 0)'}))
            ])
        ])
    ]
})
export class N163Component implements OnInit {
    public words: string;
    constructor(
        private http: Http,
        private n163: N163Service,
        private router: Router
    ) {}

    public ngOnInit() {
        //
    }
}
