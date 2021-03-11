import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutineAddComponent } from './routine/routine-add/routine-add.component';
import { RoutineComponent } from './routine/routine.component';


const routes: Routes = [
  

  {path:'', component: RoutineComponent},
  
  
  {path:'routines/category/:categoryId', component:RoutineComponent},
  {path:'routine-add', component: RoutineAddComponent}
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
