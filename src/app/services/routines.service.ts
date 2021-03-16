import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Routine } from '../routine/routine';


@Injectable({
  providedIn: 'root'
})
export class RoutinesService {

  constructor(private http:HttpClient) { }

  endpoint="http://localhost:3000/routines/"; 


  //Get All
  getRoutines():Observable<any>{
    return this.http.get(this.endpoint)
  }

   //Get One
   updateRoutine(id: number,routine:Routine):Observable<any>{
    return this.http.put(this.endpoint+id,routine)
  }
    //Update One
    getRoutine(id: number):Observable<any>{
      return this.http.get(this.endpoint+id)
    }

  //Delete One
   deleteRoutine(id: number):Observable<any>{
    return this.http.delete(this.endpoint+id)
  }
 


}
