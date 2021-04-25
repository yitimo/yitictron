import {
    Component,
    OnInit,
    ViewEncapsulation,
    HostBinding
} from '@angular/core';

@Component({
    selector: 'musix',
    encapsulation: ViewEncapsulation.None,
    templateUrl: `./app.component.html`,
    styleUrls: [`./app.component.css`]
})
export class AppComponent {
    @HostBinding('class.flex-y') public flexC: boolean = true;
}
