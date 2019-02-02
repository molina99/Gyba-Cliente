import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { UserPageComponent } from './user-page.component';

@NgModule({
    imports: [CommonModule, UserPageRoutingModule],
    declarations: [UserPageComponent]
})
export class UserPageModule {}
