import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    styleUrls: [ './home.component.css' ],
    templateUrl: './home.component.html'
})
export class HomeComponent {
    @HostBinding('class.flex-y') public flexC: boolean = true;
    public switch($event) {
        console.log($event);
    }
}
