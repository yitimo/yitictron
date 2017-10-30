/**
 * 专用于弹出新窗口进行微博OAuth2认证
 * 由于electron本地环境，只能弹出新窗口定向到微博授权界面，
 * 完成授权后重定向到weibo.yitimo.com的专用回调页
 * 回调页将使用原生node能力得到微博配置并操作accesstoken
 */
import { Injectable } from '@angular/core';
import { Http } from './http';
import { ConfigService } from './apiconfig.service';

@Injectable()
export class OAuthWeiboService {
    constructor(
        private http: Http,
        private config: ConfigService
    ) {}
    public AuthBegin(toPath?: string): Promise<any> {
        window.localStorage.setItem('topath', toPath || '/home');
        return this.config.weiboConfig().then((res) => {
            let win = window.open(`https://api.weibo.com/oauth2/authorize?client_id=${res.client_id
            }&redirect_uri=${res.redirect_uri}&response_type=code`);
            window.onmessage = (_res) => {
                if (_res.data === 'authed') {
                    win.close();
                }
            };
            return false;
            // let waiting = true;
            // window.onmessage = (_res) => {
            //     if (_res.data === 'authed') {
            //         waiting = false;
            //         win.close();
            //         return Promise.resolve();
            //     }
            // };
            // window.setTimeout(() => {
            //     if (waiting) {
            //         return Promise.reject('登陆超时');
            //     }
            // }, 60000);
        });
    }
    /**
     * 检查本地的token是否有效
     * 无论是否有效都将请求验证
     * 所以此请求后进行其他接口调用能基本保证token有效，缺点就是多一次请求
     */
    public AuthCheck(): Promise<any> {
        return this.config.weiboToken().then((res) => {
            return false;
            // return this.http.Post(`https://api.weibo.com/oauth2/get_token_info?access_token=${res.access_token}`).then((_res) => {
            //     res.expires_in = JSON.parse(_res || '{}').expire_in;
            //     return this.config.setWeiboToken(res);
            // });
        });
    }
}
