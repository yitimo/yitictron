import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OAuthWeiboService } from '../services/oauth.weibo.service';

@Injectable()
export class WeiboGuard implements CanActivate {
    constructor(
        private auth: OAuthWeiboService
    ) {}
    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> {
        return this.auth.AuthCheck().then((res) => {
            console.log('让我过去啊');
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
