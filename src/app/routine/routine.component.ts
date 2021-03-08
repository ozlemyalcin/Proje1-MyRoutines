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
    { id: 1, name: "Out of Bed", categoryId: 1, description: "asdfgh", score: 1, imageUrl: "https://image.freepik.com/free-vector/alarm-clock-background_1212-457.jpg"},

    { id: 2, name: "Exercising", categoryId: 1, description: "asdfgh", score: 1, imageUrl: "https://image.freepik.com/free-vector/cute-children-boys-girls-top-yoga-asanas-poses-cartoon-icons-collection-set_1284-8661.jpg" },
    { id: 3, name: "Breakfast", categoryId: 1, description: "asdfgh", score: 2, imageUrl: "https://www.sheknows.com/wp-content/uploads/2017/03/bunny-pancakes.jpg" },

    {id:4, name: "Cleaning Room" ,categoryId:1 ,description:"lets  ",score:2,imageUrl:"https://image.freepik.com/free-vector/messy-children-room-with-furniture-interior-objects-before-after-cleaning-flat_1284-33253.jpg"},
    {id:5, name: "Homework" ,categoryId:2 ,description:"lets ",score:3,imageUrl:"https://image.freepik.com/free-vector/maths-homework_23-2147532090.jpg"},
    {id:6, name: "Learning time" ,categoryId:2 ,description:"lets o ",score:3,imageUrl:"https://image.freepik.com/free-vector/mom-reading-book-children-home-mother-telling-little-children-fairytale_74855-14458.jpg"},
    {id:7, name: "Quite Time" ,categoryId:2 ,description:"lets  ",score:2,imageUrl:"https://image.freepik.com/free-vector/child-meditating-quietly_7710-64.jpg"},
    {id:8, name: "Journaling" ,categoryId:3 ,description:"lets ",score:3,imageUrl:"https://as1.ftcdn.net/jpg/01/18/61/50/500_F_118615079_CivfAEeB9qAeWOQQgxzyvtnHtjhX2Rg4.jpg"},
    {id:9, name: "Lunch time" ,categoryId:2 ,description:"lets  ",score:2,imageUrl:"https://image.freepik.com/free-vector/little-children-eating-healthy-food_29937-6059.jpg"},
    {id:10, name: "Helping" ,categoryId:3 ,description:"lets out of bed ",score:3,imageUrl:"https://image.freepik.com/free-vector/vector-illustration-cartoon-mother-her-two-children-looking-strawberry-plant-raised-garden-bed_283146-126.jpg"},
    {id:11, name: "Reading" ,categoryId:3 ,description:"lets out of bed ",score:4,imageUrl:"https://image.freepik.com/free-vector/scene-with-many-children-reading-books-home_1308-40674.jpg"},
    {id:12, name: "Family Time" ,categoryId:3 ,description:"lets out of bed ",score:1,imageUrl:"https://image.freepik.com/free-vector/family-enjoying-time-together_52683-37724.jpg"},
    {id:13, name: "Brush teeth" ,categoryId:3 ,description:"lets out of bed ",score:1,imageUrl:"https://image.freepik.com/free-vector/teeth-care-set_74855-6676.jpg"},
    {id:14, name: "Ready for Bed" ,categoryId:3 ,description:"lets out of bed ",score:1,imageUrl:"https://image.freepik.com/free-vector/four-scenes-kid-sleeping-bed-night-time_1308-42082.jpg"}
  ]

  ngOnInit() {
  }
  
  addToAlert(routine) {
    this.alertifyService.confirmAlert("Did you complete this habit?","Heeyy! you earn +"+routine.score+" point", "Oh!No! Let's try again!!" )

 


  }
}
