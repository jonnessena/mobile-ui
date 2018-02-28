import { HttpModule } from '@angular/http/';
import { NgModule } from '@angular/core/';
import { MobileRepository } from './repository';

@NgModule({
    imports: [
        HttpModule,
    ]
})
export class CoreModule {}
