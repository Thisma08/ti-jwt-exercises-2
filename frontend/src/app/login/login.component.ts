import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: string = 'User';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.username, this.password, this.role).subscribe(
      () => {
        this.isLoggedIn = true;
        console.log('Login successful, JWT received');
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

  checkIsConnected() {
    this.authService.isConnected().subscribe(
      response => console.log('IsConnected response:', response),
      error => console.error('IsConnected failed', error)
    );
  }

  testRoleConnection() {
    this.authService.testConnectionByRole().subscribe(
      response => console.log('Role test response:', response),
      error => console.error('Role test failed', error)
    );
  }
}
