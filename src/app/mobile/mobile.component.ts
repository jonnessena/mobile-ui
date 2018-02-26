import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Mobile } from '../core/mobile';

@Component({
    selector: 'mobile-create-component',
    templateUrl: 'mobile.component.html',
    styleUrls: ['mobile.component.css']
})
export class MobileCreateComponent  {

    createForm: FormGroup;

    constructor( private readonly fb: FormBuilder) {
        this.createForm = fb.group({
            model: null,
            price: null,
            brand: null,
            imageLink: null,
            date: null
        });
    }

    create() {
        const {model = null, price = null, brand = null, imageLink = null, date = null} = this.createForm.value;
        console.log(Object.assign(new Mobile, {
            model,
            price,
            brand,
            imageLink,
            date
        }));
    }

}
