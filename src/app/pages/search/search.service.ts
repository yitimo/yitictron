import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
    constructor(
        private http: HttpClient
    ) {}
    public Song(words: string, page?: number, limit?: number): Observable<any> {
        return this.http.get(`https://api.163.yitimo.com/search/${words}/${page || 1}/${limit || 10}`);
    }
    public Album(words: string, page?: number, limit?: number): Observable<any> {
        return this.http.get(`https://api.163.yitimo.com/search/album/${words}/${page || 1}/${limit || 10}`);
    }
    public Artist(words: string, page?: number, limit?: number): Observable<any> {
        return this.http.get(`https://api.163.yitimo.com/search/artist/${words}/${page || 1}/${limit || 10}`);
    }
}
