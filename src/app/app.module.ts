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


import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



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
    RoutineeditComponent,
    LoginComponent,
    RegisterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FontAwesomeModule
   
  ],
  providers: [AlertifyService,
    AuthService,
    AngularFireAuth],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
