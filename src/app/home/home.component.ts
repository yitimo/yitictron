import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    styleUrls: [ './home.component.css' ],
    templateUrl: './home.component.html'
})
export class HomeComponent {
    public switch($event) {
        console.log($event);
    }
}
