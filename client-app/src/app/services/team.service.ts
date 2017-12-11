import { Injectable } from '@angular/core';
import { Task } from '../classes/task';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TeamService {
   public TASKS: Task[] = [
    new Task(1, 'Design improvements', 1),
    new Task(2, 'New marketing strategy', 1),
    new Task(3, 'Social media', 2),
    new Task(4, 'Backend imporvements', 3),
    new Task(5, 'Organize Christmas Party', 3),
    new Task(6, 'Frontend Testing', 3),
    new Task(7, 'Client support',3)
  ];

  constructor() { }

  public getTasks(id: number) : Observable<Task[]> {
    return of(this.TASKS.filter(
      task => task.teamID === id));
  }

  public addTask(task: Task) : Observable<any> {
    return of(this.TASKS.push(task));
  }

  public getTask(id: number) : Observable<Task> {
    return of(this.TASKS.find(task => task.id === id));
  }
}
