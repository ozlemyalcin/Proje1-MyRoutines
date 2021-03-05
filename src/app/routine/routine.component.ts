import { Component, OnInit } from '@angular/core';
import { Routine } from './routine';
import {AlertifyService} from '../services/alertify.service'
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css'],
  providers:[AlertifyService]
})
export class RoutineComponent implements OnInit {

  constructor(private alertifyService:AlertifyService) { }

  title = "My Routines"
  filterText = ""
  toplam = 0

  routines: Routine[] = [
    { id: 1, name: "Out of Bed", categoryId: 1, description: "asdfgh", score: 1, imageUrl: "..." },
    { id: 2, name: "Exercising", categoryId: 1, description: "asdfgh", score: 1, imageUrl: ".." },
    { id: 3, name: "Meal Time", categoryId: 2, description: "asdfgh", score: 2, imageUrl: ".." },



  ]

  ngOnInit() {
  }
  
  addToAlert(routine) {
    this.alertifyService.confirmAlert("Did you complete this habit?","Heeyy! you earn +"+routine.score+" point", "Oh!No! Let's try again!!" )

 


  }
}
