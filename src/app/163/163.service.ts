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
            let http = window['ytcHttp'] || {request: () => {
                reject('native node http disabled !');
            }};
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
                let data = '';
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', (chunk) => {
                    let _res = JSON.parse(data);
                    if (_res.code === 200) {
                        resolve(_res.result);
                    } else {
                        reject(_res.msg || _res);
                    }
                });
                res.on('error', (chunk) => {
                    reject('请求出错');
                });
            });
            req.write(_data);
            req.end();
        });
    }
}
