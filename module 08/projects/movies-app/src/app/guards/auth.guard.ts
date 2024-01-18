import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { filter, firstValueFrom, take } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const url = state.url;

  const isLoggedIn = await firstValueFrom(auth.getStatus());

  if (isLoggedIn) return true;

  const nextLogin$ = auth.getStatus().pipe(
    filter(val => val === true), 
    take(1)
  );

  nextLogin$.subscribe(_ => {
    router.navigateByUrl(url);
  })
  

  return router.createUrlTree(['account']);
};
