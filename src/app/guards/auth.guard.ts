import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    console.log('User is authenticated');
    return true;
  } else {
    console.log('User is not authenticated');
    return router.parseUrl('/connexion');
  }
};
