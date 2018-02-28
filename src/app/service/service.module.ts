import { MobileRepository } from './../core/repository';
import { NgModule } from '@angular/core';
@NgModule({
    providers: [ MobileRepository ],
    exports: [ MobileRepository ]
})
export class ServiceModule {}
