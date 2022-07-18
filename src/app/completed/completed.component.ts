import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  taskArray! : Task[];
  constructor(private taskService : TasksService) { }

  ngOnInit(): void {
    this.getAllTask();
  }
  getAllTask(){
    this.taskService.getAllTask().subscribe(res=> {
      this.taskArray=res;
    },err=>{
      console.log(err);
    })
  }
  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>this.ngOnInit());
  }
  deleteAllTask(){
    this.taskArray.map(
      task => this.taskService.deleteTask(task).subscribe(()=>this.ngOnInit())
    )
  }
  ischeck(event:any,task:Task){
    if(!event.currentTarget.checked){
      task.type="active";
    }
    this.taskService.editTask(task).subscribe(res=>{
      this.ngOnInit();
    },err=>{
      console.log(err)
    });
  }
}
