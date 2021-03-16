import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Routine } from 'src/app/models/routines';
import { RoutinesService } from 'src/app/services/routines.service';

@Component({
  selector: 'app-routineedit',
  templateUrl: './routineedit.component.html',
  styleUrls: ['./routineedit.component.css']
})
export class RoutineeditComponent implements OnInit {
  submitted = false;

  constructor(private routinesService:RoutinesService, private route:ActivatedRoute) { }
  id: any;
  routine =new Routine();

  ngOnInit(): void {
    this.route.paramMap.subscribe(
    params=>this.id=parseInt(params.get('id'))
    );
    this.loadData();
  }

  loadData(){
    this.routinesService.getRoutine(this.id) 
     .subscribe(
       data => this.routine=data
     )

  }
    

  handleSubmit(r: NgForm) {
    this.routinesService.updateRoutine(this.id, r.value)
    .subscribe(
      data=>{
        this.submitted=true;
        console.log("Form: ",r.value);
        console.log("Data: ", data)

      }
    )

  }
}
