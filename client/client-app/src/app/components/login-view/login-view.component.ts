import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
  providers: [AuthService]
  
})
export class LoginViewComponent implements OnInit {
  private error: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  private tryLogin(username: string, password: string) {
    this.authService.login(username, password).subscribe((success: boolean) => {
      if (success) {
        const redirectTo: string = this.route.snapshot.queryParamMap.get('from') || '';
        this.router.navigate([redirectTo]);
      } else {
        this.error = 'Hibás felhasnzálónév vagy jelszó';
      }
    });
  }

}
