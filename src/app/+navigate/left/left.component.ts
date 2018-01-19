import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent } from '@angular/router';

@Component({
    selector: 'nav-left',
    templateUrl: 'left.component.html',
    styleUrls: ['left.component.css']
})

export class NavLeftComponent implements OnInit {
    public current: string;
    constructor(
        private router: Router,
        private aRoute: ActivatedRoute
    ) {}
    public ngOnInit() {
        this.router.events.subscribe((event: RouterEvent) => {
            if (event && event.url && !this.match(event.url)) {
                this.current = event.url === '/' ? '/' : event.url.split('/')[1];
            }
        });
    }
    private match(newUrl: string): boolean {
        return newUrl.indexOf(this.current) === 1 || newUrl === this.current;
    }
}
