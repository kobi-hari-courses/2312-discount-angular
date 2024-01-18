import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'}, 
    { path: 'home', component: HomeComponent }, 
    { path: 'movies', loadComponent: () => import('./components/movies-list/movies-list.component') }, 
    { path: 'movies/:index', component: MovieDetailsComponent},
    { path: 'movies/:index/edit', component: MovieEditComponent, canActivate: [authGuard]},
    { path: 'account', loadComponent: () => import('./components/account/account.component') }

];
