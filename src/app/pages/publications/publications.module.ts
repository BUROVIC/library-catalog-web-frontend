import {NgModule} from '@angular/core';

import {PublicationsRoutingModule} from './publications-routing.module';

import {PublicationsComponent} from './publications.component';
import {NzListModule} from 'ng-zorro-antd/list';
import {CommonModule} from '@angular/common';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzInputModule} from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzSelectModule} from 'ng-zorro-antd/select';


@NgModule({
  imports: [
    PublicationsRoutingModule,
    FormsModule,
    CommonModule,
    NzListModule,
    NzModalModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule
  ],
  declarations: [PublicationsComponent],
  exports: [PublicationsComponent]
})
export class PublicationsModule {
}
