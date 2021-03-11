import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Routine } from '../routine/routine';
import { Observable } from 'rxjs';

@Injectable()
export class RoutineService {

  constructor(private http:HttpClient) { }
  path="http://localhost:3000/routines"

  getRoutines(categoryId):Observable<Routine[]> {
    //alert(categoryId);
    let newPath=this.path;
    if(categoryId){
      newPath+= "?categoryId="+categoryId;
    }



    return this.http.get<Routine[]>(newPath);
     
    
  }

  addRoutine(routine:Routine):Observable<Routine>{

    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Routine>(this.path,routine, httpOptions)


  }
}
