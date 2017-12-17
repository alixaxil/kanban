import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../classes/task';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css'],
  providers: [TaskService, TeamService]
})
export class TaskViewComponent implements OnInit {
  task: Task;

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
}
