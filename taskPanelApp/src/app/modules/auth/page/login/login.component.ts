import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  isValid: Boolean = false;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup(
      {
        user: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)])

      }
    )
  }


  sendCredentials() {

    const { user, password } = this.loginForm.value;
    this.isValid = this.authService.validLogin(user, password);
  
    if (!this.isValid) {
      console.error("error login");
      return;
    }
    console.log("valid login");
    this.router.navigate(['/task/task'])
  }



}
