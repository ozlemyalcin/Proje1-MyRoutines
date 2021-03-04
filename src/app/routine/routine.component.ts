import { Component, OnInit } from '@angular/core';
import { Routine } from './routine';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css']
})
export class RoutineComponent implements OnInit {

  constructor() { }

  title="My Routines"
  filterText=""
  toplam=0

  routines: Routine[]=[
    {id:1,name:"Out of Bed",categoryId:1, description:"asdfgh", score:1, imageUrl:"..."},
    {id:2,name:"Exercising",categoryId:1, description:"asdfgh", score:1, imageUrl:".."},
    {id:3,name:"Meal Time",categoryId:2, description:"asdfgh", score:2 ,imageUrl:".."},
    
  

  ]

  ngOnInit() {
  }
  addToScore(routine){
    alert("You earn +"+ routine.score +" point")

  }
}
