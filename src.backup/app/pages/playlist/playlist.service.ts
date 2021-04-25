import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from '../../-core';

@Injectable()
export class PLaylistService {
    constructor(
        private http: HttpClient,
        private global: GlobalService
    ) {
        //
    }
    public All(page: number, limit: number): Observable<any> {
        return this.http.get(`${this.global.apiDomain}/playlist/全部/hot/${page}/${limit}`);
    }
}
