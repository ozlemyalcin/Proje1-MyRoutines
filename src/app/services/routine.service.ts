import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Routine } from '../routine/routine';
import { Observable } from 'rxjs';

@Injectable()
export class RoutineService {

  constructor(private http:HttpClient) { }
  path="http://localhost:3000/routines"

  getRoutines():Observable<Routine[]> {
    return this.http.get<Routine[]>(this.path);
     
    
  }
}
