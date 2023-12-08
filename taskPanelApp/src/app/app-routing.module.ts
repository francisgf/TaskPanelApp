import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // lasyLoar routing
  {
    path:'auth',//http://localhost:4200/auth
    loadChildren:()=> import('@modules/auth/auth.module').then((m)=>m.AuthModule)
  },
  {
    path:'task',//http://localhost:4200/task
    loadChildren:()=> import('@modules/task/task.module').then((m)=>m.TaskModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
