import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  isLogin: boolean;
  email: string = '';
  fullname: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {
    // Determine if the page is for login or registration
    this.isLogin = this.router.url === '/login';
  }

  onSubmit() {
    // Handle form submission logic
    if (this.isLogin) {
      console.log('Logging in with:', this.email, this.password);
    } else {
      if (this.password === this.confirmPassword) {
        console.log('Registering with:', this.email, this.fullname, this.password);
      } else {
        console.error('Passwords do not match');
      }
    }
  }
}

