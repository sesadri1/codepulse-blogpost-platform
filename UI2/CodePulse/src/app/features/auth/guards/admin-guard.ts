import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);


  const user = authService.user();

  if(!user){
    // Navigate back to login page
    router.navigate(['/login']);
    return false;

  }
  // User is logged in

  // Check the role of the user
  const isWriter = user.roles.includes("writer");

  if(!isWriter){
    authService.logout();
    return false;
  }
  // user logged in with a writer role
  return true;
};
