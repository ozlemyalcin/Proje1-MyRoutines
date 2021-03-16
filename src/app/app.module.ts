import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { RoutineComponent } from './routine/routine.component';
import { RoutineFilterPipe } from './routine/routine-filter.pipe';
import { FormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { RoutineAddComponent } from './routine/routine-add/routine-add.component';

import { RoutinesComponent } from './routines/routines.component';
import { RoutinelistComponent } from './routines/routinelist/routinelist.component';
import { RoutineeditComponent } from './routines/routineedit/routineedit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    RoutineComponent,
    RoutineFilterPipe,
    RoutineAddComponent,
  
    RoutinesComponent,
    RoutinelistComponent,
    RoutineeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
