import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// tslint:disable:no-bitwise
@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor() {}

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = req.headers
            .set('Authorization', 'Basic ' + this.base64Encode('yitimo:iamyitimo'))
            .set('Content-Type',
            req.method.toUpperCase() === 'POST' ? 'application/x-www-form-urlencoded; charset=UTF-8' : 'application/json');
        const authReq = req.clone({ headers });
        return next.handle(authReq).pipe(map((event) => {
            if (event instanceof HttpResponse) {
                switch (event.status) {
                    case 200:
                    if (event.body['state']) {
                        const newEvent = event.clone({body: event.body['data']});
                        return newEvent;
                    } else {
                        throw event.body['msg'];
                    }
                    default:
                    throw new Error(`【${event.status}】【${event.statusText}】`);
                }
            }
            return event;
        }));
    }

    private base64Encode(source: string): string {
        const _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        let output = '';
        // tslint:disable-next-line:one-variable-per-declaration
        let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        let i = 0;
        while (i < source.length) {
            chr1 = source.charCodeAt(i++);
            chr2 = source.charCodeAt(i++);
            chr3 = source.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    }
}
