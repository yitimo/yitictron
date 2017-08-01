import { Injectable } from '@angular/core';

@Injectable()
export class N163Service {
    /**
     * 超级搜索
     * @param s 关键词
     * @param options [搜索类型, 偏移, 上限]
     */
    public Search(s: string, options?: any[]): Promise<any> {
        if (!options) {
            options = [];
        }
        return this.search(`/api/search/get/`, `s=${s}&limit=${options[2] || 15}&type=${options[0] || 1}&offset=${options[1] || 0}`);
    }
    private search(_path, _data): Promise<any> {
        return new Promise((resolve, reject) => {
            let http = require('http');
            let req = http.request({
                hostname: 'music.163.com',
                path: _path,
                method: 'POST',
                headers: {
                    'Cookie': 'appver=2.0.2',
                    'Referer': 'http://music.163.com',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': _data.length
                }
            }, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    console.log(chunk);
                });
            });
            req.write(_data);
            req.end();
        });
    }
}
