import { Directive, Input, ViewContainerRef } from '@angular/core';

const icons = [
    {name: 'none', url: ''},
    {name: 'close', url: '/assets/icons/close.png'},
    {name: 'time', url: '/assets/icons/time.png'}
];

@Directive({
    selector: 'img[icon]'
})
export class IconDirective {
    constructor(
        private vcRef: ViewContainerRef
    ) {}
    @Input() public set icon(value: any) {
        const find = icons.find((i) => i.name === value);
        if (find) {
            this.vcRef.element.nativeElement.src = find.url;
        } else {
            this.vcRef.element.nativeElement.src = icons[0].url;
        }
    }
}
