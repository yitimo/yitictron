/**
 * 专用于弹出新窗口进行微博OAuth2认证
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class YTCHttpService {
    private http;
    private https;
    constructor(private ngHttp: Http) {
        this.http = window['ytcHttp'] || {request: () => {
            return new Promise((res, rej) => {
                rej('native node http disabled !');
            });
        }};
        this.https = window['ytcHttps'] || {request: () => {
            return new Promise((res, rej) => {
                rej('native node https disabled !');
            });
        }};
    }
    public Get(url: string, _headers?: any): Promise<any> {
        let urlParse = this.urlParse(url);
        if (urlParse.https) {
            return this._https({
                hostname: urlParse.hostname,
                path: urlParse.path,
                method: 'GET',
                headers: _headers || undefined
            });
        } else {
            return this._http({
                hostname: urlParse.hostname,
                path: urlParse.path,
                method: 'GET',
                headers: _headers || undefined
            });
        }
    }
    public Post(url: string, data?: string, _headers?: any): Promise<any> {
        let urlParse = this.urlParse(url);
        if (urlParse.https) {
            return this._https({
                hostname: urlParse.hostname,
                path: urlParse.path,
                method: 'POST',
                headers: _headers || undefined
            }, data);
        } else {
            return this._http({
                hostname: urlParse.hostname,
                path: urlParse.path,
                method: 'POST',
                headers: _headers || undefined
            }, data);
        }
    }
    public Post163(_path, _method, data): Promise<any> {
        return new Promise((resolve, reject) => {
            let req = this.http.request({
                hostname: 'music.163.com',
                path: _path,
                method: _method,
                headers: {
                    'Cookie': 'appver=2.0.2',
                    'Referer': 'http://music.163.com',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': data.length
                }
            }, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(chunk);
                });
                res.on('error', (chunk) => {
                    reject(chunk);
                });
            });
            req.write(data);
            req.end();
        });
    }
    /*
    this.http = require('http');
    console.log(this.http);
    let req = this.http.request({
        hostname: 'music.163.com',
        path: '/api/search/get/',
        method: 'POST',
        headers: {
            'Cookie': 'appver=2.0.2',
            'Referer': 'http://music.163.com',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': `s=玫瑰色的你&limit=20&type=1&offset=0`.length
        }
    }, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(chunk);
    });
    });
    req.write(`s=玫瑰色的你&limit=20&type=1&offset=0`);
    req.end();
    */
    private _http(option: ReqOptions, data?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let req = this.http.request(option, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(chunk);
                });
                res.on('error', (chunk) => {
                    reject(chunk);
                });
            });
            if (data) {
                req.write(data);
            }
            req.end();
        });
    }
    private _https(option: ReqOptions, data?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let req = this.https.request(option, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    if (chunk.error && chunk.error_code) {
                        reject(chunk);
                    } else {
                        resolve(chunk);
                    }
                });
                res.on('error', (chunk) => {
                    reject(chunk);
                });
            });
            if (data) {
                req.write(data);
            }
            req.end();
        });
    }
    private urlParse(url: string): {
        https: boolean,
        hostname: string,
        path: string
    } {
        let rs = {
            https: false,
            hostname: 'api.yitimo.com',
            path: '/'
        };
        if (url.indexOf('https') === 0) {
            rs.https = true;
            url = url.slice(8);
        } else if (url.indexOf('http') === 0) {
            rs.https = false;
            url = url.slice(7);
        }
        let pieces = url.split('/');
        rs.hostname = pieces.splice(0, 1)[0];
        rs.path = '/' + pieces.join('/');
        return rs;
    }
}

interface ReqOptions {
    hostname: string; // api.yitimo.com
    path?: string; // /oauth
    method?: string; // GET
    headers?: object; // {'Content-Type': 'application/json'}
}
export interface Options {
    headers?: object;
}
