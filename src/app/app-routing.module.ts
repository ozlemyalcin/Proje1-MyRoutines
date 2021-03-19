import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutineAddComponent } from './routine/routine-add/routine-add.component';
import { RoutineComponent } from './routine/routine.component';
import { RoutinesComponent } from './routines/routines.component';
import { RoutinelistComponent } from './routines/routinelist/routinelist.component';
import { RoutineeditComponent } from './routines/routineedit/routineedit.component';






const routes: Routes = [
  

  {path:'', component: RoutineComponent},
  
  
  
  {path:'routines/category/:categoryId', component:RoutineComponent},
  {path:'routine-add', component: RoutineAddComponent},

  {path:'routines', component:RoutinesComponent,
children:[
  {path:'show', component:RoutinelistComponent},
  {path:'edit/:id', component:RoutineeditComponent},
  {path:'delete/:id', component:RoutinelistComponent}
 
]}
  
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
