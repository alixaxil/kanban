import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamsService } from '../../services/teams.service';
import { Team } from '../../classes/team';
import { Task } from '../../classes/task';
import { TaskService } from '../../services/task.service';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css'],
  providers: [TeamService, TeamsService]
})
export class TeamViewComponent implements OnInit {
  @Output()
  public createItem: EventEmitter<Task> = new EventEmitter();
  public tasks: Task[];
  team: Team;
  count: number = 8;


  constructor(
    private activatedRoute: ActivatedRoute,
    private teamsservice: TeamsService,
    private teamService: TeamService) {
  }
  @Input()

  public clickButton(desc: string,
  ): void {
    const t = new Task(this.count, desc, this.team.id)
    this.createItem.emit(t);
    this.addTask(t);
    this.count++;

  }

  ngOnInit(): void {
    this.getTeam();
    this.getTasks();
  }
  addTask(task: Task): void {
    this.teamService.addTask(task).subscribe();
  }

  getTeam(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.teamsservice.getTeamById(id)
      .subscribe(team => this.team = team);
  }

  getTasks(): void {
    this.teamService.getTasks(this.team.id)
      .subscribe(tasks => this.tasks = tasks);
  }

}
