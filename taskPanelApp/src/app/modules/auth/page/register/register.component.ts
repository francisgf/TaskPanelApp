import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInterface } from '@core/models/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(public authService: AuthService) {

  }
  registerForm: FormGroup = new FormGroup({})


  ngOnInit(): void {
    this.registerForm = new FormGroup({



      names: new FormControl('', Validators.required),
      firtsNames: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      cellPhone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    })
  }



  sendRegister() {

    const usuario: UserInterface = this.registerForm.value;

    this.authService.register(usuario).subscribe(
      response => {
        console.log('Usuario registrado correctamente:', response);
      },
      error => {
        console.error('Error al registrar usuario:', error);
      }
    );
  }

}
