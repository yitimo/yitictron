import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: 'pagination.component.html',
    styleUrls: ['pagination.component.css']
})
export class PaginationComponent {
    /**
     * 总共多少页
     */
    public totalPage: number = 0;
    /**
     * 每页多少数据
     */
    @Input() public limit: number = 10;
    /**
     * 总共多少数据
     */
    public get total() {
        return this._total;
    }
    @Input() public set total(value: number) {
        this._total = value;
        this.totalPage = Math.ceil(value / this.limit);
    }
    /**
     * 当前第几页
     */
    @Input() public current: number = 1;
    @Output() public switch: EventEmitter<any> = new EventEmitter<any>();
    private _total: number = 0;
    public doSwitch(page: number) {
        if (page < 1 || page > this.totalPage) {
            return;
        } else if (this.current === page) {
            return;
        }
        this.switch.emit(page);
    }
}
