import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Task } from '../classes/task';
import { TeamService } from './team.service';

@Injectable()
export class TaskService {
  /*public TASKS: Task[] = [
    new Task(1, 'Design improvements', 1),
    new Task(2, 'New marketing strategy', 1),
    new Task(3, 'Social media', 2),
    new Task(4, 'Backend imporvements', 3),
    new Task(5, 'Organize Christmas Party', 3),
    new Task(6, 'Frontend Testing', 3),
    new Task(7, 'Client support',3)
  ];*/

  constructor(
    private teamService: TeamService
  ) { }

  getTask(id: number): Observable<Task> {
    return of(TASKS.find(task => task.id === id));
  }


}
