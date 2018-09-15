import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GlobalService } from '../../-core';

@Injectable()
export class SearchService {
    constructor(
        private http: HttpClient,
        private global: GlobalService
    ) {}
    public Song(words: string, page?: number, limit?: number): Observable<any> {
        return this.http.get(`${this.global.apiDomain}/search/${words}/${page || 1}/${limit || 10}`)
        .pipe(map((rs: any) => rs.result));
    }
    public Album(words: string, page?: number, limit?: number): Observable<any> {
        return this.http.get(`${this.global.apiDomain}/search/album/${words}/${page || 1}/${limit || 10}`)
        .pipe(map((rs: any) => rs.result));
    }
    public Artist(words: string, page?: number, limit?: number): Observable<any> {
        return this.http.get(`${this.global.apiDomain}/search/artist/${words}/${page || 1}/${limit || 10}`)
        .pipe(map((rs: any) => rs.result));
    }
    public Playlist(words: string, page?: number, limit?: number): Observable<any> {
        return this.http.get(`${this.global.apiDomain}/search/playlist/${words}/${page || 1}/${limit || 10}`)
        .pipe(map((rs: any) => rs.result));
    }
}
