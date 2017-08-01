import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    private fs;
    constructor() {
        this.fs = window['ytcFs'] || false;
    }
    public weiboConfig(): Promise<any> {
        return new Promise((res, rej) => {
            if (!this.fs) {
                rej('node native fs disabled');
            } else {
                this.fs.readFile('weibo-config', 'utf8', (err, data) => {
                    if (err) {
                        rej(err);
                    }
                    try {
                        res(JSON.parse(data));
                    } catch (e) {
                        rej('数据出错');
                    }
                });
            }
        });
    }
    public weiboToken(): Promise<any> {
        return new Promise((res, rej) => {
            if (!this.fs) {
                rej('node native fs disabled');
            } else {
                this.fs.readFile('weibo-token', 'utf8', (err, data) => {
                    if (err) {
                        rej(err);
                    }
                    try {
                        let token = JSON.parse(data);
                        if (token.access_token && token.expires_in > 70000) {
                            res(token);
                        } else {
                            throw 'token 无效';
                        }
                    } catch (e) {
                        rej('数据出错');
                    }
                });
            }
        });
    }
    public setWeiboToken(config): Promise<any> {
        return new Promise((res, rej) => {
            if (!this.fs) {
                rej('node native fs disabled');
            } else {
                this.fs.writeFile('weibo-token', JSON.stringify(config), (err) => {
                    if (err) {
                        rej(err);
                    }
                    res(config);
                });
            }
        });
    }
}
