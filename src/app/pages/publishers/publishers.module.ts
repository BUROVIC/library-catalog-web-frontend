import {NgModule} from '@angular/core';

import {PublishersRoutingModule} from './publishers-routing.module';

import {PublishersComponent} from './publishers.component';
import {NzListModule} from 'ng-zorro-antd/list';
import {CommonModule} from '@angular/common';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzInputModule} from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzSelectModule} from 'ng-zorro-antd/select';


@NgModule({
  imports: [
    PublishersRoutingModule,
    FormsModule,
    CommonModule,
    NzListModule,
    NzModalModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule
  ],
  declarations: [PublishersComponent],
  exports: [PublishersComponent]
})
export class PublishersModule {
}
