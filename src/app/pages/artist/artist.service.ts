import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../../-core';

// tslint:disable:max-line-length
@Injectable()
export class ArtistService {
    constructor(
        private http: HttpClient,
        private global: GlobalService
    ) {}
    public Top(page: number, limit: number): Observable<any> {
        return Observable.of(JSON.parse(`{"artists":[{"albumSize":32,"alias":["Jay Chou"],"briefDesc":"","id":6452,"img1v1Id":19018252625793868,"img1v1Id_str":"19018252625793869","img1v1Url":"http://p3.music.126.net/Qc5fsvjghmXXrLavDdQWgA==/19018252625793869.jpg","musicSize":464,"name":"周杰伦","picId":109951163111196200,"picId_str":"109951163111196186","picUrl":"http://p4.music.126.net/ql3nSwy0XKow_HAoZzRZgw==/109951163111196186.jpg","topicPerson":0,"trans":""},{"albumSize":99,"alias":["Eason Chan"],"briefDesc":"","id":2116,"img1v1Id":19165587183900212,"img1v1Id_str":"19165587183900212","img1v1Url":"http://p3.music.126.net/_d1scu7z_1dmd0Zgv9mTLA==/19165587183900212.jpg","musicSize":1604,"name":"陈奕迅","picId":18641120139241412,"picId_str":"18641120139241412","picUrl":"http://p3.music.126.net/nILBk4DaE3yV__25uq-5GQ==/18641120139241412.jpg","topicPerson":0,"trans":""},{"accountId":97137413,"albumSize":15,"alias":[],"briefDesc":"","id":5781,"img1v1Id":3250156379592966,"img1v1Url":"http://p3.music.126.net/ULlwJ2drOfYv-f6-_7jGGQ==/3250156379592966.jpg","musicSize":142,"name":"薛之谦","picId":3427177755493494,"picUrl":"http://p4.music.126.net/cmky1_hu0S0vfFr6U_03Bg==/3427177755493494.jpg","topicPerson":0,"trans":""},{"albumSize":61,"alias":[],"briefDesc":"","id":126339,"img1v1Id":109951163109244020,"img1v1Id_str":"109951163109244011","img1v1Url":"http://p4.music.126.net/H4Lh45kDfeb1Ke7THhNWjQ==/109951163109244011.jpg","musicSize":578,"name":"BIGBANG","picId":109951163019784370,"picId_str":"109951163019784374","picUrl":"http://p3.music.126.net/aEg8VZViJ_rneeRDv9pzqQ==/109951163019784374.jpg","topicPerson":0,"trans":"빅뱅","transNames":["빅뱅"]},{"albumSize":39,"alias":["JJ Lin"],"briefDesc":"","id":3684,"img1v1Id":3263350518850877,"img1v1Url":"http://p3.music.126.net/cnGpIQ6rQCKVrDyVVSpzeg==/3263350518850877.jpg","musicSize":438,"name":"林俊杰","picId":3389794350704969,"picUrl":"http://p3.music.126.net/_cB2figc8IpT89DYhpARxA==/3389794350704969.jpg","topicPerson":0,"trans":""}],"code":200,"more":true}`))
            .map((res: any) => res.artists);
        // return this.http.get(`${this.global.apiDomain}/artist/top/${page}/${limit}`)
        //     .map((res: any) => res.artists);
    }
}
