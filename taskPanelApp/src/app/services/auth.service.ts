import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from '@core/models/user.interface';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseUrlApiJava='http://localhost:8082'
  baseUrlApiNode='http://localhost:3000'
  //urlRegister: string = this.baseUrlApiJava+'/auth/register/'
  urlRegister: string = this.baseUrlApiNode+'/save'
  urlValidLogin: string = this.baseUrlApiJava+'/auth/login/'

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

  register(userBody: UserInterface): Observable<any> {
    const url = this.urlRegister;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post(url, userBody, { headers }).pipe(
      catchError((error) => {
        console.error('Error al registrar usuario:', error);
        return throwError(error);
      })
    );
  }
}
