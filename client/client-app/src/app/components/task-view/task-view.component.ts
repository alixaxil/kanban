import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task, Progress } from '../../classes/task';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css'],
  providers: [TaskService, TeamService]
})
export class TaskViewComponent implements OnInit {
  task: Task;
  public progress = Progress;
  keys() : Array<string> {
    var keys = Object.keys(this.progress);
    return keys.slice(keys.length / 2);
  }

  constructor(private activatedRoute: ActivatedRoute, 
  private taskService: TaskService,
  private teamService: TeamService) { }

  ngOnInit() {
    console.log("Taskview.");
    this.getTask();
  }

  getTask(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.teamService.getTask(id)
      .subscribe(task => this.task = task);
  }

  tryProgressChange(progress: string): void{
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.teamService.changeProgress(id, progress)
    .subscribe(task => this.task = task);
  }
}
