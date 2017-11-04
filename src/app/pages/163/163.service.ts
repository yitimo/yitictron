import { Injectable } from '@angular/core';
import { Http } from '../../-core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class N163Service {
    constructor(
        private http: Http,
        private ngHttp: HttpClient
    ) {}
    /**
     * 超级搜索
     * @param s 关键词
     * @param options [搜索类型, 页码, 每页条目]
     */
    public Search(s: string, options?: any[]): Observable<any> {
        if (!options) {
            options = [];
        }
        return this.ngHttp.get(`https://api.163.yitimo.com/search/${s}/${options[0] || 1}/${options[1] || 10}`);
    }
    public MusicInfo(id: number): Observable<any> {
        return this.ngHttp.get(`https://api.163.yitimo.com/info/music/${id}`);
    }
    public Download(id: number): Observable<any> {
        return this.ngHttp.get(`https://api.163.yitimo.com/download/${id}`);
    }
}
