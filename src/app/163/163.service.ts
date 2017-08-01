import { Injectable } from '@angular/core';

@Injectable()
export class N163Service {
    public Post(_path, _data): Promise<any> {
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
