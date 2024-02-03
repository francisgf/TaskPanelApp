import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

export const validateSessionGuard: CanActivateFn = (route, state) => {

  const isValidSession = true;

  if (isValidSession) {
    return true;
  } else {

   //const cookieService = CookieService();
    const route = new Router();
    //route.navigate(['/','auth','login'])//
    route.navigate(['/'])// regresa al login
    console.log('😊😊', isValidSession)
    return false;
  }

};



export class CookieManager {

  constructor(private cookieService: CookieService  ){
  }

  setCookieSession() {
    this.cookieService.put('TOKEN_SESION', 'COOKIE123456789');
    console.log('Cookie establecida');
  };

  getCookieSession() {
    const cookieValue = this.cookieService.get('TOKEN_SESION');
    console.log('Valor de la cookie:', cookieValue);
  }
}