import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AllteamsService } from '../../services/allteams.service';
import { Team } from '../../classes/team';
import { User } from '../../classes/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
    public team: Team;
    public users: User[];

  constructor(private authService: AuthService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private allTeamsService: AllteamsService,
    private userService: UserService  
  ) { }

  ngOnInit() {
    /*const id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.allTeamsService.getTeamById(id).subscribe((team) => {
      this.team = team;
      this.userService.getUsersByTeam(team.id).subscribe((users) => {
        this.users = users;
      })
    });*/

  }

}
