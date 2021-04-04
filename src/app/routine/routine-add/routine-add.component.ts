import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { RoutineService } from 'src/app/services/routine.service';
import { Routine } from '../routine';

@Component({
  selector: 'app-routine-add',
  templateUrl: './routine-add.component.html',
  styleUrls: ['./routine-add.component.css'],
  providers:[CategoryService, RoutineService]
})
export class RoutineAddComponent implements OnInit {

  constructor(private categoryService:CategoryService,
    private routineService:RoutineService, 
    private alertifyService:AlertifyService) { }

  model:Routine= new Routine();
  categories :Category[];


 
 
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data
    });
  }

  add(form:NgForm)
  {
    this.routineService.addRoutine(this.model).subscribe(data=>{
      this.alertifyService.success("Routine: "+data.name+ " successfully added")
    });

  }

}
