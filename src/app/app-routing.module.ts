import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutineComponent } from './routine/routine.component';


const routes: Routes = [
  {path:'', component: RoutineComponent},
  {path:'routines/category/:categoryId', component:RoutineComponent}
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
