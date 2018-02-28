import { Mobile } from './../core/mobile';
import { Observable } from 'rxjs/Observable';
import { MobileRepository } from '../core/repository';
import { Injectable } from '@angular/core';

@Injectable()
export class MobileService {
    constructor( private readonly repository: MobileRepository) {}

    listMobiles(): Observable<Mobile[]> {
        return this.repository.get('http://localhost:4200/claro/mobile');
    }

    create(mobile: Mobile): Observable<Mobile> {
        return this.repository.create('/claro/mobile', mobile);
    }
}
