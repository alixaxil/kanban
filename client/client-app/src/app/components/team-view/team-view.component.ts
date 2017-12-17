import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamsService } from '../../services/teams.service';
import { Team } from '../../classes/team';
import { Task, Progress } from '../../classes/task';
import { TaskService } from '../../services/task.service';
import { TeamService } from '../../services/team.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css'],
  providers: [TeamService, TeamsService]
})

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class TeamViewComponent implements OnInit {
  @Output()
  public createItem: EventEmitter<Task> = new EventEmitter();
  public tasks: Task[];
  team: Team;
  teamId: number;
  count: number = 8;

  public Progress = Progress; //for enum checking

  constructor(
    private activatedRoute: ActivatedRoute,
    private teamsservice: TeamsService,
    private teamService: TeamService) {
  }
  @Input()

  public clickButton(desc: string, text: string
  ): void {
    console.log("clicky button " + this.teamId);
    const t = new Task( text, desc, this.teamId)
    this.createItem.emit(t);
    this.addTask(t);
    this.count++;

  }

  ngOnInit(): void {
    this.teamId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));    
    this.getTeam();
    this.getTasks();
  }
  addTask(task: Task): void {
    this.teamService.addTask(task).subscribe(
      data => console.log("Added task")
    );
  }

  getTeam(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.teamsservice.getTeamById(this.teamId)
      .subscribe(team => this.team = team);
  }

  getTasks(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.teamService.getTasks(id)
      .subscribe(tasks => this.tasks = tasks);
  }

}
