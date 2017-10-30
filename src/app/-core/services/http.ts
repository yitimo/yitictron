/**
 * 专用于弹出新窗口进行微博OAuth2认证
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface ReqOption {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    headers?: Object;
    body?: any;
    url?: string;
    is163?: boolean;
    responseType?: 'json' | 'arraybuffer' | 'blob' | 'text' | 'document' | '';
}

@Injectable()
export class Http {
    private http;
    private https;
    private nativeHttp: any;
    private nativeHttps: any;
    constructor(private ngHttp: HttpClient) {
        this.nativeHttp = window['ytcHttp'] || {};
        this.nativeHttps = window['ytcHttps'] || {};
    }
    /**
     * 原生的nodejs的http的 get 请求
     * @param _url 请求路径 包括query参数
     * @param _options 可选请求配置
     */
    public get_native(_url: string, _options?: ReqOption): Observable<any> {
        const options: ReqOption = {
            url: _url,
            method: 'GET',
            headers: this.mergeHeaders('GET', _options.headers),
            body: _options.body || null,
            is163: _options.is163 || false,
            responseType: _options.responseType || 'json'
        };
        return this.request(options);
    }
    /**
     * 原生的nodejs的http的 post 请求
     * @param _url 请求路径 包括query参数
     * @param _options 可选请求配置
     */
    public post_native(_url: string, _body: any, _options?: ReqOption): Observable<any> {
        const options: ReqOption = {
            url: _url,
            method: 'POST',
            headers: this.mergeHeaders('POST', _options.headers),
            body: _body || null,
            is163: _options.is163 || false,
            responseType: _options.responseType || 'json'
        };
        return this.request(options);
    }
    /**
     * 底层请求发起
     * @param options 请求完整配置
     */
    private request(options: ReqOption): Observable<any> {
        return new Observable((observer) => {
            let req: any;
            let url = this.urlParse(options.url);
            let reqParams = {
                hostname: url.host,
                path: url.path,
                method: options.method,
                headers: options.headers
            };
            if (url.ssl) {
                req = this.nativeHttp.request(reqParams, (res) => {
                    this.reqCallback(res, observer);
                });
            } else {
                req = this.nativeHttp.request(reqParams, (res) => {
                    this.reqCallback(res, observer);
                });
            }
            req.write(typeof options.body === 'string' ? options.body : JSON.stringify(options.body));
            req.end();
        });
    }
    private reqCallback(res, observer) {
        let data = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', (chunk) => {
            let _res: any;
            try {
                _res = JSON.parse(data);
            } catch (e) {
                _res = e;
            }
            if (_res.code === 200) {
                observer.next(_res.result);
            } else {
                observer.error(_res.msg || _res);
            }
        });
        res.on('error', (chunk) => {
            observer.error(chunk);
        });
    }
    private urlParse(url: string): {ssl: boolean, host: string, path: string} {
        let _ssl = url.indexOf('https') >= 0;
        let _host = '';
        let _path = '';
        let urlSlice = [];
        if (_ssl) {
            urlSlice = url.slice(8).split('/');
        } else if (url.indexOf('http') >= 0) {
            urlSlice = url.slice(7).split('/');
        } else {
            urlSlice = url.split('/');
        }
        _host = urlSlice[0];
        urlSlice.shift();
        _path = '/' + urlSlice.join('/');
        return {
            ssl: _ssl,
            host: _host,
            path: _path
        };
    }
    private mergeHeaders(method: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE', headers: Object): Object {
        let rs = headers;
        rs['Content-Type'] = rs['Content-Type'] || 'application/json';
        return rs;
    }
}
