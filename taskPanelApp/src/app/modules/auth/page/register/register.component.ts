import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInterface } from '@core/models/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterfaceNode } from '@core/models/user.interfaceNode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   messageOut:String='';
   controlMessageOut:boolean=false;

  constructor(public authService: AuthService, public rout: Router) {
   this.messageOut='';
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

    //const usuario: UserInterface = this.registerForm.value;
    //node:
    //  const usuario: UserInterfaceNode = this.registerForm.value;

    const usuario: UserInterfaceNode = {
      id: 0, // O el valor inicial que prefieras para 'id'
      NAME: '',
      FIRSTNAME: '',
      USERNAME: '',
      EMAIL: '',
      CELLPHONE: '',
      PASSWORD: ''
    };

    usuario.NAME = this.registerForm.get('names')?.value;
    usuario.FIRSTNAME = this.registerForm.get('firtsNames')?.value;
    usuario.USERNAME = this.registerForm.get('userName')?.value;
    usuario.EMAIL = this.registerForm.get('email')?.value;
    usuario.CELLPHONE = this.registerForm.get('cellPhone')?.value;
    usuario.PASSWORD = this.registerForm.get('password')?.value;

    this.authService.register(usuario).subscribe(
      response => {
        this.controlMessageOut=true;
        console.log('Usuario registrado correctamente:', response);
        if (response.status === 201) {
          this.messageOut=response.message;
          this.rout.navigate(['/auth/login'])
        }
      },
      error => {
        console.error('Error al registrar usuario:', error);
        if (error.status === 0) {
          this.messageOut=error.message;
          console.error('Error al registrar usuario:', error); //respuestas de error especificas
        }
      }
    );
  }

}
