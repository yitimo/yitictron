import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OAuthWeiboService } from '../services/oauth.weibo.service';

@Injectable()
export class WeiboGuard implements CanActivate {
    private cango: boolean;
    constructor(
        private auth: OAuthWeiboService
    ) {
        this.cango = false;
    }
    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> | boolean {
        if (this.cango) {
            setTimeout(() => {
                this.cango = false;
            }, 60000);
            return true;
        }
        return this.auth.AuthCheck().then((res) => {
            this.cango = true;
            console.log('微博认证有效');
            return true;
        }).catch((err) => {
            return this.auth.AuthBegin().then((_res) => {
                return _res;
            }).catch((_err) => {
                console.log(_err);
                return false;
            });
        });
    }
}
