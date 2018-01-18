import {
    Component, EventEmitter, Output, Input,
    AfterContentInit, HostListener, HostBinding, ContentChild,
    ElementRef
} from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, state, animate } from '@angular/animations';

import { HistoryService } from '../../-core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'nav-search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css']
})
export class NavSearchComponent implements AfterContentInit {
    @Output() public enter: EventEmitter<string> = new EventEmitter<string>();
    @HostBinding('style.overflow') public overflowS: string = 'hidden';
    @HostBinding('class.flex') public flexC: boolean = true;
    public inputActive: boolean = false;
    public historyActive: boolean = false;
    public chosenHistory: number;
    public histories: any[];
    public stype: 'song' | 'album' | 'artist';
    public words: string; // input bind
    constructor(
        private history: HistoryService,
        private router: Router
    ) {
        this.histories = [];
        this.stype = 'song';
    }
    public onKeyup($event: KeyboardEvent): void {
        // arrow key to switch histories
        // enter key to emit search
        switch ($event.keyCode) {
            case 13: // enter
            if (this.words && this.words.length) {
                this.router.navigate([`/search/${this.stype}`, this.words]);
            }
            break;
            case 38: // up
            if (this.histories && this.histories.length && this.chosenHistory < (this.histories.length - 1)) {
                this.chosenHistory++;
            }
            break;
            case 40: // down
            if (this.histories && this.histories.length && this.chosenHistory > 0) {
                this.chosenHistory--;
            }
            break;
            default:
            break;
        }
    }
    /**
     * use to change seatch type, and update bar in search result pages when directly entered
     * @param type search type
     * @param words serach words
     */
    public updateBar(type: 'song' | 'album' | 'artist', words?: string) {
        this.stype = type;
        this.words = words || this.words;
    }
    public ngAfterContentInit() {
        // get history
        const input = window.document.getElementById('musix-search-bar');
        input.onfocus = () => {
            this.overflowS = 'visible';
            setTimeout(() => {
                this.inputActive = true;
                this.historyActive = true;
            }, 10);
        };
        input.onblur = () => {
            this.historyActive = false;
            this.inputActive = false;
            setTimeout(() => {
                this.overflowS = 'hidden';
            }, 10);
        };
        this.histories = this.history.get();
    }
    private historyUpdate() {
        // update history store & runtime value
    }
}
