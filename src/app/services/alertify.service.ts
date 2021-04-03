import { Injectable } from '@angular/core';
import { Routine } from '../routine/routine';
import { RoutinesService } from './routines.service';
declare let alertify: any;
//declare module 'alertifyjs';

@Injectable()

export class AlertifyService {

  constructor() { }


//my function
success(message:string){
  alertify.success(message)
}

confirmAlert(confirmMessage:string, successMessage:string, errorMessage:string)
{
  alertify.confirm(confirmMessage,
  function () {
    alertify.success(successMessage);
    
  

  
  },
  function () {
    alertify.error(errorMessage);
  });

}

}
