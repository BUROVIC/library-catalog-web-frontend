import {NgModule} from '@angular/core';

import {AuthorsRoutingModule} from './authors-routing.module';

import {AuthorsComponent} from './authors.component';
import {NzListModule} from 'ng-zorro-antd/list';
import {CommonModule} from '@angular/common';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzInputModule} from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import {NzButtonModule} from 'ng-zorro-antd/button';


@NgModule({
  imports: [
    AuthorsRoutingModule,
    FormsModule,
    CommonModule,
    NzListModule,
    NzModalModule,
    NzInputModule,
    NzButtonModule
  ],
  declarations: [AuthorsComponent],
  exports: [AuthorsComponent]
})
export class AuthorsModule {
}
