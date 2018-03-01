import { filter } from 'rxjs/operators';
import { MobileService } from '../service/mobile.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Mobile } from '../core/mobile';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
    selector: 'mobile-create-component',
    templateUrl: 'mobile.component.html',
    styleUrls: ['mobile.component.css']
})
export class MobileCreateComponent implements OnInit, OnDestroy  {
    
createForm: FormGroup;
listMobile: Mobile[] = [];
destroyed = new Subject<void>();

constructor( private readonly fb: FormBuilder,
    private readonly service: MobileService,
    public snackBar: MatSnackBar) {
        this.createForm = fb.group({
            model: null,
            price: null,
            brand: null,
            imageLink: null,
            date: null
        });
    }
    
ngOnInit() {
    this.loadMobiles();
}

loadMobiles() {
    debugger;
    this.service.listMobiles()
    .pipe(filter(i => !!i), takeUntil(this.destroyed))
    .subscribe({
        next: list => Object.assign(this.listMobile, list),
        error: err => console.log(err)
    });
}

ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
    }
    
create() {
    const {model = null, price = null, brand = null, imageLink = null, date = null} = this.createForm.value;
    this.service.create(Object.assign(new Mobile, {
        model,
        price,
        brand,
        imageLink,
        date
    }))
    .subscribe({
        next: () => {
            debugger;
            this.snackBar.open('Registro salvo com sucesso.', 'OK', {duration: 3000});
            this.loadMobiles();
        },
        error: err => console.log(err)
    });
}
}
    