import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  takssForm!: FormGroup;
  task! : Task;
  taskArray! : Task[];
  constructor(private formBuilder:FormBuilder,private taskService : TasksService) { }

  ngOnInit(): void {
    this.takssForm = this.formBuilder.group({
      task:[null]
    });
    this.taskArray=[];
    this.getAllTask();
  }
  getAllTask(){
    this.taskService.getAllTask().subscribe(res=> {
      this.taskArray=res;
    },err=>{
      console.log(err);
    })
  }
  addTask(task_value:String){
    const task =new  Task;
    task.task=task_value;
    task.type="active";
    
    this.taskService.addTask(task).subscribe(res => {
      this.ngOnInit();
    },err=>{
      console.log(err);
    });
  }
  ischeck(event:any,task:Task){
    if(event.currentTarget.checked){
      task.type="completed";
    }
    this.taskService.editTask(task).subscribe(res=>{
      this.ngOnInit();
    },err=>{
      console.log(err)
    });
  }
}
