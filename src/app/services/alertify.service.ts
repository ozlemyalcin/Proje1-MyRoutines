import { Injectable } from '@angular/core';
declare let alertify: any;
//declare module 'alertifyjs';

@Injectable()

export class AlertifyService {

  constructor() { }


//my function

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
