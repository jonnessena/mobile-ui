import { Mobile } from './mobile';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { filter, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class MobileRepository {
    constructor(private readonly http: Http) {}

    get(url: string, attr?: string): Observable<Mobile[]> {
        return this.http.get(url)
        .pipe(map( response => {
            return response.json().map(item => {
                return Object.assign(new Mobile(), {
                    model: item.model,
                    price: item.price,
                    brand: item.brand,
                    imageLink: item.imageLink,
                    date: item.date
                });
            });
        }));
    }

    create(url: string, body: Mobile): Observable<Mobile> {
        return this.http.post(url, body)
        .pipe(map( response => {
            return response.json().map(item => {
                return Object.assign(new Mobile(), {
                    model: item.model,
                    price: item.price,
                    brand: item.brand,
                    imageLink: item.imageLink,
                    date: item.date
                });
            });
        }));
    }
}
