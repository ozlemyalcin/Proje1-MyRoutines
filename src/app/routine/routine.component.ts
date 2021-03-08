import { Component, OnInit } from '@angular/core';
import { Routine } from './routine';
import {AlertifyService} from '../services/alertify.service'
import * as alertify from 'alertifyjs';
import { RoutineService } from '../services/routine.service';



@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css'],
  
  providers:[RoutineService]
})
export class RoutineComponent implements OnInit {

  constructor(private alertifyService:AlertifyService,
    private routineService:RoutineService
    ) { }
  

  
  title = "My Routines"
  filterText = ""
 

  routines: Routine[];


  ngOnInit() {
    this.routineService.getRoutines().subscribe(data=>{
      this.routines=data
    });


   
  
  


  }
  
  addToAlert(routine) {
    this.alertifyService.confirmAlert("Did you complete this habit?","Heeyy! you earn +"+routine.score+" point", "Oh!No! Let's try again!!" )

 


  }
}
