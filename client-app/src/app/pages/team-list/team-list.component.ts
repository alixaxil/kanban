import { Component, OnInit } from '@angular/core';
import {User} from "../../classes/User";
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import { Team } from '../../classes/team';
import { AllteamsService } from '../../services/allteams.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  public allteams: Team[];

  constructor(private authService: AuthService, private router: Router, 
    private allTeamsService: AllteamsService) { }

  ngOnInit() {
    this.allTeamsService.getAllTeams()
    .subscribe((allteams: Team[]) => {
      this.allteams = allteams;
    });
  }

}
