import { Injectable } from '@angular/core';
import { Http } from '../../-core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class N163Service {
    constructor(
        private http: Http
    ) {}
    public Download(id) {
        // http://m1.music.126.net/[encrypted_song_id]/[song_dfsId].mp3
    }
    /**
     * 超级搜索
     * @param s 关键词
     * @param options [搜索类型, 页码, 每页条目]
     */
    public Search(s: string, options?: any[]): Observable<any> {
        if (!options) {
            options = [];
        }
        return this.request(
            `http://music.163.com/api/search/get/`,
            `s=${s}&limit=${((options[1] || 0) + 1) * (options[2] || 15)}&type=${
            options[0] || 1}&offset=0`).map((res) => {
                res.songs.splice(0, (options[1] || 0) * (options[2] || 15));
                return res;
            });
    }
    private request(url, data) {
        return this.http.post_native(
            url,
            data,
            {
                headers: {
                    'Cookie': 'appver=2.0.2',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Referer': 'http://music.163.com',
                    'Content-Length': data.length
                }
            }
        );
    }
}
