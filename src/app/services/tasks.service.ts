import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  getAllTask():Observable<Task[]>{
    return this.http.get<Task[]>('http://localhost:3000/tasks');
  }
  
  addTask(task:Task) :Observable<Task>{
    return this.http.post<Task>('http://localhost:3000/tasks',task);
  }
  deleteTask(task:Task) :Observable<Task>{
    return this.http.delete<Task>(`http://localhost:3000/tasks/${task.id}`);
  }
  editTask(task:Task) :Observable<Task>{
    return this.http.put<Task>(`http://localhost:3000/tasks/${task.id}`,task);
  }
}
