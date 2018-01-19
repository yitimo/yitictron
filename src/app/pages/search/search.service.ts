import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { GlobalService } from '../../-core';

@Injectable()
export class SearchService {
    constructor(
        private http: HttpClient,
        private global: GlobalService
    ) {}
    public Song(words: string, page?: number, limit?: number): Observable<any> {
        return this.http.get(`${this.global.apiDomain}/search/${words}/${page || 1}/${limit || 10}`)
        .map((rs: any) => rs.result);
    }
    public Album(words: string, page?: number, limit?: number): Observable<any> {
        return this.http.get(`${this.global.apiDomain}/search/album/${words}/${page || 1}/${limit || 10}`)
        .map((rs: any) => rs.result);
    }
    public Artist(words: string, page?: number, limit?: number): Observable<any> {
        return this.http.get(`${this.global.apiDomain}/search/artist/${words}/${page || 1}/${limit || 10}`)
        .map((rs: any) => rs.result);
    }
    public Playlist(words: string, page?: number, limit?: number): Observable<any> {
        // tslint:disable-next-line:max-line-length
        return Observable.of(JSON.parse(`{"code":200,"result":{"playlistCount":508,"playlists":[{"alg":"alg_playlist_basic","bookCount":1859,"coverImgUrl":"http://p1.music.126.net/Hmw2hYq4fR4kBWak_B7_tQ==/18862121974929645.jpg","creator":{"authStatus":0,"expertTags":null,"experts":null,"nickname":"尤文杰BBLin","userId":271823391,"userType":0},"highQuality":false,"id":987015536,"name":"你好旧时光 电视剧原声带","playCount":80067,"subscribed":false,"trackCount":32,"userId":271823391},{"alg":"alg_playlist_basic","bookCount":137081,"coverImgUrl":"http://p1.music.126.net/KllcdxRHfjXIWjD1-SgM-Q==/3272146614788805.jpg","creator":{"authStatus":0,"expertTags":null,"experts":null,"nickname":"郭霸霸Gxl","userId":50914047,"userType":0},"highQuality":false,"id":307335057,"name":"你我分别如此挣扎,余生太长你好难忘","playCount":8227607,"subscribed":false,"trackCount":160,"userId":50914047},{"alg":"alg_playlist_basic","bookCount":24648,"coverImgUrl":"http://p1.music.126.net/SC8hASZaZ6YRe6WumtN9pA==/19056735533068394.jpg","creator":{"authStatus":0,"expertTags":null,"experts":null,"nickname":"薛之谦的前女友","userId":247601188,"userType":0},"highQuality":false,"id":718799878,"name":"「你好旧时光」纵使时光再旧，回味依然常新","playCount":2545407,"subscribed":false,"trackCount":76,"userId":247601188},{"alg":"alg_playlist_basic","bookCount":72189,"coverImgUrl":"http://p1.music.126.net/Ogw2n6EaqkmuPVpayMmcXw==/1365593448739920.jpg","creator":{"authStatus":0,"expertTags":null,"experts":null,"nickname":"徊梦","userId":1322216,"userType":0},"highQuality":false,"id":125823885,"name":"温柔的床头音乐，祝你好梦。","playCount":2814053,"subscribed":false,"trackCount":30,"userId":1322216},{"alg":"alg_playlist_basic","bookCount":2018,"coverImgUrl":"http://p1.music.126.net/SVwDLjoZsJ_mw1RflvKkQg==/19082024300575421.jpg","creator":{"authStatus":0,"expertTags":null,"experts":null,"nickname":"去爱吧像从来没受伤一样","userId":110803194,"userType":0},"highQuality":false,"id":994641130,"name":"致青春:你好，旧时光里我们单纯的小美好","playCount":92163,"subscribed":false,"trackCount":34,"userId":110803194},{"alg":"alg_playlist_basic","bookCount":7973,"coverImgUrl":"http://p1.music.126.net/tVEk5RLz-6N5Ovy-xRUXqQ==/18967675090940238.jpg","creator":{"authStatus":0,"expertTags":null,"experts":null,"nickname":"扎萝莉的双马尾","userId":277687634,"userType":0},"highQuality":false,"id":748328959,"name":"『纯音·雨声』安眠神器，助你好梦","playCount":400451,"subscribed":false,"trackCount":208,"userId":277687634},{"alg":"alg_playlist_basic","bookCount":388,"coverImgUrl":"http://p1.music.126.net/AZo1VqHNoxwh9RucunyN6w==/109951162948785152.jpg","creator":{"authStatus":0,"expertTags":null,"experts":null,"nickname":"JackChengYan","userId":63006165,"userType":0},"highQuality":false,"id":763155051,"name":"你好，很难过认识你【持续更新】ʕ •ᴥ•","playCount":44380,"subscribed":false,"trackCount":84,"userId":63006165},{"alg":"alg_playlist_basic","bookCount":27204,"coverImgUrl":"http://p1.music.126.net/SLNy1TKlGXj5u24VY4nHwA==/7954966627495095.jpg","creator":{"authStatus":0,"expertTags":null,"experts":null,"nickname":"-MakabaKa-","userId":61848525,"userType":0},"highQuality":false,"id":82621571,"name":"【听说你好久不听中文歌】","playCount":2691595,"subscribed":false,"trackCount":188,"userId":61848525},{"alg":"alg_playlist_basic","bookCount":6554,"coverImgUrl":"http://p1.music.126.net/CXGiv7V_QNMEAZ5rAHjfMw==/18906102439690118.jpg","creator":{"authStatus":0,"expertTags":null,"experts":null,"nickname":"现人神","userId":47639370,"userType":0},"highQuality":false,"id":64885528,"name":"三无MarBlue","playCount":232250,"subscribed":false,"trackCount":139,"userId":47639370},{"alg":"alg_playlist_basic","bookCount":3136,"coverImgUrl":"http://p1.music.126.net/lRA3aKMj64NtHw6DrZ8azA==/7964862233187136.jpg","creator":{"authStatus":0,"expertTags":null,"experts":null,"nickname":"岛田真梦","userId":9495553,"userType":0},"highQuality":false,"id":41079954,"name":"「Vocaloid Feat. 初音ミク」Verison 37.1","playCount":53405,"subscribed":false,"trackCount":3890,"userId":9495553}]}}`))
        .map((rs: any) => rs.result);
        // return this.http.get(`${this.global.apiDomain}/search/playlist/${words}/${page || 1}/${limit || 10}`)
        // .map((rs: any) => rs.result);
    }
}
