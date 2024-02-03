import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './page/task/task.component';
import { HeaderComponent } from './component/header/header.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    TaskComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ]
})
export class TaskModule { }
