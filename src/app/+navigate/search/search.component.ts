import {
    Component, EventEmitter, Output, Input,
    AfterContentInit, HostListener, HostBinding, ContentChild,
    ElementRef
} from '@angular/core';
import { trigger, transition, style, state, animate } from '@angular/animations';

@Component({
    selector: 'nav-search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css']
})
export class NavSearchComponent implements AfterContentInit {
    @Output() public enter: EventEmitter<string> = new EventEmitter<string>();
    @HostBinding('style.overflow') public overflowS: string = 'hidden';
    public inputActive: boolean = false;
    public historyActive: boolean = false;
    public chosenHistory: number;
    public history: any[];
    public onKeyup($event: KeyboardEvent): void {
        // arrow key to switch histories
        // enter key to emit search
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
    }
    private historyUpdate() {
        // update history store & runtime value
    }
}
