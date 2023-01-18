import {Component} from '@angular/core';
import {AuthService} from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';

  password: string = '';

  constructor(private authService: AuthService) {
  }

  doLogin() {
    this.authService.validate(this.email, this.password);
  }
}