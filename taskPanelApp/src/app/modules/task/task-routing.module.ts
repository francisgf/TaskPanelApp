import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './page/task/task.component';
import { validateSessionGuard } from '@core/guards/validate-session.guard';

const routes: Routes = [
  {
    path:'task',
    component:TaskComponent  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class TaskRoutingModule { }
