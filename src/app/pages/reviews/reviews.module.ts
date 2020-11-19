import {NgModule} from '@angular/core';

import {ReviewsRoutingModule} from './reviews-routing.module';

import {ReviewsComponent} from './reviews.component';
import {NzListModule} from 'ng-zorro-antd/list';
import {CommonModule} from '@angular/common';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzInputModule} from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzSwitchModule} from 'ng-zorro-antd/switch';


@NgModule({
  imports: [
    ReviewsRoutingModule,
    FormsModule,
    CommonModule,
    NzListModule,
    NzModalModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzSwitchModule
  ],
  declarations: [ReviewsComponent],
  exports: [ReviewsComponent]
})
export class ReviewsModule {
}
