import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const logInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request going out', req);
  return next(req);
};


export const userInterceptor: HttpInterceptorFn = (req, next) => {
  const newRequest = req.clone({
    headers: req.headers.set('Accept', 'text/something')
  });

  const res =  next(newRequest).pipe(
    tap(val => console.log('Request returned', val))
  );

  return res;
}