import { Component, OnInit } from '@angular/core';
import { Routine } from 'src/app/routine/routine';
import { RoutinesService } from 'src/app/services/routines.service';

@Component({
  selector: 'app-routinelist',
  templateUrl: './routinelist.component.html',
  styleUrls: ['./routinelist.component.css']
})
export class RoutinelistComponent implements OnInit {

  count:number;  //current rcord count
  submitted=false; //submission status

  constructor(private routinesService:RoutinesService) { }

  routines: Routine[];

  ngOnInit():void {
    this.loadData();
  }


  loadData(){
    this.routinesService.getRoutines()
    .subscribe(
      data=>{
        this.routines=data;
        this.count=this.routines.length;
      });
  }
deleteOne(id:number){
  this.routinesService.deleteRoutine(id)
  .subscribe(
    data=>{
      this.submitted=true;
      this.loadData();
      console.log("Data: ", data);

    });
}

}
