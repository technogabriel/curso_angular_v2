import { CanActivateFn, Router } from '@angular/router';
import { LOCALSTORAGE_ENTRY_USUARIO_LOGUEADO } from './login/login.component';
import { inject } from '@angular/core';

export const logueadoGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const logueado = JSON.parse(localStorage.getItem(LOCALSTORAGE_ENTRY_USUARIO_LOGUEADO)!);

  if(logueado){
    return true;
  } else {
    return  router.parseUrl('./debe-loguearse')
  }

  
  
};
