import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  

  constructor(private authService: AuthService, private router: Router, public cookieService: CookieService) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup(
      {
        user: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)])

      }
    )
  }


  sendCredentials() {

    const { user, password } = this.loginForm.value;
    const isValid = this.authService.validLogin(user, password);

    if (isValid==true) {
      console.log("valid login");
      this.router.navigate(['/task/task'])
      this.setCookie(); 
    } else {
      console.error("error login");

    }

  }

  setCookie() {
    this.cookieService.put('TOKEN_SESION', 'COOKIE123456789');
    console.log('Cookie establecida');
  }

  getCookieSession() {
    const cookieValue = this.cookieService.get('TOKEN_SESION');
    console.log('Valor de la cookie:', cookieValue);
  }

}
