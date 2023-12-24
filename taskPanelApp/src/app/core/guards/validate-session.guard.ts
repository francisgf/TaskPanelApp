import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';



export const validateSessionGuard: CanActivateFn = (route, state) => {

  const isValidSession = true;
  //const cookieService = new CookieService();
  if (isValidSession ) {

    return true;
  } else {

    const route = new Router();
    //route.navigate(['/','auth','login'])//
    route.navigate(['/'])// regresa al login
    return false;
  }
console.log('😊😊',isValidSession)
};
