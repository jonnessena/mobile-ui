import { Mobile } from './../core/mobile';
import { Observable } from 'rxjs/Observable';
import { MobileRepository } from '../core/repository';
import { Injectable } from '@angular/core';

const host = 'http://localhost:8080';

@Injectable()
export class MobileService {
    constructor( private readonly repository: MobileRepository) {}

    listMobiles(): Observable<Mobile[]> {
        return this.repository.get(`${host}/claro/mobile`);
    }

    create(mobile: Mobile): Observable<Mobile> {
        return this.repository.create(`${host}/claro/mobile`, mobile);
    }
}
