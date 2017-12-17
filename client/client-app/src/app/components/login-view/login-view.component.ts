import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
  providers: [AuthService]
  
})
export class LoginViewComponent implements OnInit {
  private error: string = '';
  private teams: any;
  private alma: string;

  constructor(
    private authService: AuthService,
    private teamService: TeamsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  almafa(){
    console.log("Boy you clicked me!");
  }

  private tryLogin(username: string, password: string) {
    console.log("Trying login?");
    
    this.authService.login(username, password).subscribe( data => {
        console.log("Login succesful: " + JSON.stringify(data));
        this.router.navigateByUrl('/teams');        
      }
    );
  
  }

}
