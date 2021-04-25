import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GlobalService } from '../../-core';

// tslint:disable:max-line-length
@Injectable()
export class ArtistService {
    public top: any[];
    constructor(
        private http: HttpClient,
        private global: GlobalService
    ) {}
    public Top(page: number, limit: number): Observable<any> {
        // return this.http.get(`${this.global.apiDomain}/artist/top/${page}/${limit}`);
        return of();
    }
    public Detail(id: number, page: number, limit: number): Observable<any> {
        // return this.http.get(`${this.global.apiDomain}/artist/${id}/${page}/${limit}`);
        return of();
    }
    public Albums(id: number, page: number, limit: number): Observable<any> {
        // return this.http.get(`${this.global.apiDomain}/artist/album/${id}/${page}/${limit}`);
        return of();
    }
}
