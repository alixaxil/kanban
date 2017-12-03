import { Component, OnInit } from '@angular/core';
import { User, Role } from "../../classes/User";
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { Team } from '../../classes/team';
import { AllteamsService } from '../../services/allteams.service';
import { Task, Progress } from '../../classes/task';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [AllteamsService]
})
export class TeamListComponent implements OnInit {
  private teams: Team[];
  public tasks1: Task[];
  public tasks2: Task[];
  public tasks3: Task[];
  public tasks4: Task[];
  //public f1;f2;f3;f4;f5;f6;f7;f8: Task;
  constructor(private allteamsservice: AllteamsService) { }

  ngOnInit() {
    this.teams = this.allteamsservice.getTeams();
    /*this.tasks1 = [new Task('Task1','BACKLOG' , new User(1, 'Jakab', '', 'ADMIN', ''), 1)
      , new Task('Task2', 'BLOCKED', new User(2, 'Juli', '', 'USER', ''), 2)]
    this.tasks2 = [new Task('Task3','DONE', new User(6, 'Alfred', '', 'USER', ''), 3),
    new Task('Task4', 'BACKLOG', new User(1, 'Jakab', '', 'USER', ''), 4),
    new Task('Task5', 'IN_PROGRESS', new User(2, 'Juli', '', 'USER', ''), 5)]
    this.tasks3 = [new Task('Task7', 'IN_PROGRESS', new User(6, 'Alfred', '', 'ADMIN', ''), 7)];
    this.tasks4 = [new Task('Task7', 'IN_PROGRESS', new User(6, 'Alfred', '', 'USER', ''), 7),
    new Task('Task8', 'IN_PROGRESS', new User(1, 'Jakab', '', 'ADMIN', ''), 8)];*/
    /*this.teams[0].addTasks(this.tasks1);
    this.teams[1].addTasks(this.tasks2);
    this.teams[2].addTasks(this.tasks3);
    this.teams[3].addTasks(this.tasks4);*/

    /*f2: Task = new Task('Task2',Progress.BACKLOG,new User (2, 'Juli','' , Role.GUEST,''),2);
    f3: Task = new Task('Task3',Progress.BLOCKED,new User (6, 'Alfred','' , Role.USER,''),3);
    f4: Task = new Task('Task4',Progress.DONE,new User (1, 'Jakab','' , Role.GUEST,''),4);
    f5: Task = new Task('Task5',Progress.BACKLOG, new User (2, 'Juli','' , Role.GUEST,''),5);
    f6: Task = new Task('Task6',Progress.IN_PROGRESS,new User (1, 'Jakab','' , Role.GUEST,''),6);
    f7: Task = new Task('Task7',Progress.IN_PROGRESS,new User (6, 'Alfred','' , Role.USER,''),7);
    f8: Task = new Task('Task8',Progress.IN_PROGRESS,new User (1, 'Jakab','' , Role.GUEST,''),8);*/
    /*this.users1 = [
      new User (1, 'Jakab','' , Role.GUEST,''),
      new User (2, 'Juli','' , Role.GUEST,''),
      new User (3, 'Lali','' , Role.USER,''),
    ]
    this.users2 = [
      new User (4, 'Cecil','' , Role.GUEST,''),
      new User (5, 'Bela','' , Role.GUEST,''),
      new User (6, 'Alfred','' , Role.USER,''),
    ]
    this.t1.addUsers(this.users1);
    this.t2.addUsers(this.users2);
    this.teams = [this.t1,this.t2,this.t3,this.t4];*/
  }

  /*constructor(private authService: AuthService, private router: Router, 
    private allTeamsService: AllteamsService) { }

  ngOnInit() {
    this.allTeamsService.getAllTeams()
    .subscribe((allteams: Team[]) => {
      this.allteams = allteams;
    });
  }*/

}
