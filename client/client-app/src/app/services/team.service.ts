import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Task } from '../classes/task';
import { TASKS } from '../mock-tasks';
import { ApiService } from './api.service';

@Injectable()
export class TeamService {
   public TASKS: Task[] = [
     /*
    new Task(1, 'Design improvements', 1),
    new Task(2, 'New marketing strategy', 1),
    new Task(3, 'Social media', 2),
    new Task(4, 'Backend imporvements', 3),
    new Task(5, 'Organize Christmas Party', 3),
    new Task(6, 'Frontend Testing', 3),
    new Task(7, 'Client support',3)
    */
  ];

  constructor(
    private apiService: ApiService
  ) { }

  public getTasks(id: number) : Observable<Task[]> {
    return this.apiService.get('/task/list/'+id);
  }

  public addTask(task: Task) : Observable<any> {
    //return of(this.TASKS.push(task));
    return this.apiService.post('/task/list/' + task.teamID, task);
  }

  public getTask(id: number) : Observable<Task> {
    return this.apiService.get('/task/' + id);
  }
}
