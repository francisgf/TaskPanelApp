import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  urlValidLogin: String = 'http://localhost:8080/aunt/login/validate/'
  responseData: any;
  isValidLogin: boolean = false;

  validLogin(user: string, pass: string):boolean {

    const url = this.urlValidLogin + user + '/' + pass;
    this.http.get(url).subscribe(
      (data) => {
        this.responseData = data;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );

    return this.responseData;
  }
}